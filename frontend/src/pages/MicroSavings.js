import React, { useEffect, useState } from "react";
import MicroSavingsCard from "../components/MicroSavingsCard";
import Loader from "../lib/loader";
import { runConfetti } from "../lib/utils";
import "../styles/pages/MicroSavings.css";

const MicroSavings = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  const [totalAmt, setTotalAmt] = useState();
  const [finalAmt, setFinalAmt] = useState(2500);

  const [newTransac, setNewTransac] = useState({
    transacName: "",
    transacBankAcc: "",
    transacAmt: "",
    transacTime: "",
    transacDate: "",
  });

  function fetchData() {
    setLoad(true);
    fetch("https://gullak-backend.onrender.com/payment-complete-history")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const size = data.length;
        setLoad(false);

        let sum = 0;
        for (let i = 0; i < size; i++) {
          sum =
            sum + (roundUpNearest10(data[i].transacAmt) - data[i].transacAmt);
        }
        setTotalAmt(sum);
      });
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTransac({ ...newTransac, [name]: value });
  };

  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateInput = date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const timeInput = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setNewTransac({
      ...newTransac,
      transacDate: dateInput,
      transacTime: timeInput,
    });
    fetch("https://gullak-backend.onrender.com/payment-complete-history", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransac),
    })
      .then(() => {
        setData({
          heading: "",
          description: "",
          link: "",
          color: "",
        });
      })
      .then(() => fetchData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  function roundUpNearest10(num) {
    return Math.ceil(num / 10) * 10;
  }

  return (
    <div className="ms-body">
      {load ? (
        <Loader />
      ) : (
        <div className="ms-sub-body">
          <div className="ms-payment-container">
            <h1>Payment History</h1>
            <div className="ms-card-container">
              {data.map((oneData, key) => (
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
          </div>

          <div className="ms-saving-container">
            <h1>Your savings</h1>
            <div>
              <h3>₹{totalAmt}</h3>
            </div>
            <button
              onClick={() => {
                setFinalAmt((prev) => prev + totalAmt);
                runConfetti();
                setTotalAmt(0);
              }}
            >
              Send to piggy bank
            </button>

            <div className="ms-bottom">
              <div className="ms-piggy-bank">
                <p>₹ {finalAmt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="ms-bottom">
        <h1>Add Payment</h1>
        <form onSubmit={handleSubmit} className="payment-input-form">
          <input
            type="text"
            placeholder="Eg: Food"
            name="transacName"
            value={newTransac.transacName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Eg: McDonalds"
            name="transacBankAcc"
            value={newTransac.transacBankAcc}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Eg: ₹49"
            name="transacAmt"
            value={newTransac.transacAmt}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MicroSavings;
