import React, { useContext, useEffect, useState } from "react";
import MicroSavingsCard from "../components/MicroSavingsCard";
import Loader from "../lib/loader";
import { runConfetti } from "../lib/utils";
import "../styles/pages/MicroSavings.css";
import { motion } from "framer-motion";
import { ApiData } from "../App";
import { FaArrowUp } from "react-icons/fa";
import SuccessAnimation from "../lib/successAnimation";

const MicroSavings = () => {
  const [sendLoad, setSendLoad] = useState(false);
  const [totalAmt, setTotalAmt] = useState();
  const [finalAmt, setFinalAmt] = useState(2500);
  const [successBool, setSuccessBool] = useState(false);

  const [newTransac, setNewTransac] = useState({
    transacName: "Food",
    transacBankAcc: "",
    transacAmt: "",
    transacTime: "",
    transacDate: "",
  });

  // TODO:
  const { contextData, contextLoad, setLoad, fetchApi } = useContext(ApiData);
  if(contextLoad === false)
    console.log(contextData)


  // ////////////////////////////////////////////////////////

  function fetchData() {
    if(contextLoad === false) {
      const size = contextData.length;
      setLoad(false);

      let sum = 0;
      for (let i = 0; i < size; i++) {
        sum = sum + (roundUpNearest10(contextData[i].transacAmt) - contextData[i].transacAmt);
      }
      setTotalAmt(sum);
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTransac({ ...newTransac, [name]: value });
  };

  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateInput = `${date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })}`;
    let timeInput = toString(
      date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
    setNewTransac({
      ...newTransac,
      transacDate: dateInput,
      transacTime: timeInput,
    });
    setSendLoad(true);
    console.log(newTransac);
    fetch("https://gullak-backend.onrender.com/payment-history", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransac),
    })
      .then(() => console.log("success"))
      .then(() => {
        setNewTransac({
          ...newTransac,
          transacName: "Food",
          transacAmt: "",
          transacBankAcc: "",
        });
      })
      .then(() => {
        setSendLoad(false);
        fetchApi();
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [fetchApi]);

  function roundUpNearest10(num) {
    return Math.ceil(num / 10) * 10;
  }

  return (
    <div className="ms-body">
      {contextLoad ? (
        <Loader />
      ) : (
        <div className="ms-sub-body">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className="ms-payment-container"
          >
            <h1>Payment History</h1>
            <div className="ms-card-container">
              {contextData.map((oneData, key) => (
                <MicroSavingsCard
                  transacBankAcc={oneData.transacBankAcc}
                  transacAmt={oneData.transacAmt}
                  transacName={oneData.transacName}
                  addedAmt={
                    roundUpNearest10(oneData.transacAmt) - oneData.transacAmt
                  }
                  numKey={key}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.25 }}
            className="ms-saving-container"
          >
            <h1>Your savings</h1>
            {/* <SuccessAnimation /> */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
              <h3>₹{totalAmt}</h3>
              <FaArrowUp color="green" size={18} />
            </div>
            <button
              onClick={() => {
                setFinalAmt((prev) => prev + totalAmt);
                runConfetti();
                setTotalAmt(0);
                setSuccessBool(true);
              }}
            >
              Send to piggy bank
            </button>

            {successBool && <div style={{position: "absolute"}}><SuccessAnimation /></div>}

            <div className="ms-bottom">
              <div className="ms-piggy-bank">
                <p>₹ {finalAmt}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <div className="ms-bottom">
        <h1>Add Payment</h1>
        {sendLoad ? <h1>sending...</h1> : <></>}
        <form onSubmit={handleSubmit} className="payment-input-form">
          <select
            onChange={handleChange}
            name="transacName"
            value={newTransac.transacName}
          >
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <input
            type="text"
            placeholder="Eg: McDonalds"
            name="transacBankAcc"
            value={newTransac.transacBankAcc}
            onChange={handleChange}
            required={true}
          />
          <input
            type="number"
            placeholder="Eg: ₹49"
            name="transacAmt"
            value={newTransac.transacAmt}
            onChange={handleChange}
            required={true}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MicroSavings;
