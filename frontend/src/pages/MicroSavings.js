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

  useEffect(() => {
    fetch("https://gullak-hackophilia.herokuapp.com/payment-complete-history")
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
    </div>
  );
};

export default MicroSavings;
