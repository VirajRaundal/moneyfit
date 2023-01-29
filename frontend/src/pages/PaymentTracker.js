import React, { useContext, useEffect, useState } from "react";
import "../styles/pages/PaymentTracker.css";
import PaymentTrackerCard from "../components/PaymentTrackerCard";
import Chart from "../components/Chart";
import Loader from "../lib/loader";
import { motion } from "framer-motion";
import { ApiData } from "../App";

const PaymentTracker = () => {
  const { contextData, contextLoad } = useContext(ApiData);

  const [foodPie, setFoodPie] = useState(0);
  const [shopPie, setShopPie] = useState(0);
  const [enterPie, setEnterPie] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  function calculatePieRatio() {
    if (contextLoad === false) {
      let shopSum = 0;
      let foodSum = 0;
      let enterSum = 0;

      for (let i = 0; i < contextData.length; i++) {
        if (contextData[i].transacName === "Shopping")
          shopSum = shopSum + contextData[i].transacAmt;
        else if (contextData[i].transacName === "Food")
          foodSum = foodSum + contextData[i].transacAmt;
        else if (contextData[i].transacName === "Entertainment")
          enterSum = enterSum + contextData[i].transacAmt;
      }

      setShopPie(shopSum);
      setFoodPie(foodSum);
      setEnterPie(enterSum);

      setTotalSum(shopSum + foodSum + enterSum);
    }
  }

  useEffect(() => {
    calculatePieRatio();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pt-body">
      {contextLoad ? (
        <Loader />
      ) : (
        <div className="pt-sub-body">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className="pt-card-container"
          >
            <h1 className="pt-cc-heading">Your Expenditures</h1>
            <div className="pt-card-container-div">
              {contextData.map((oneData, key) => (
                <PaymentTrackerCard
                  name={oneData.transacBankAcc}
                  logo={oneData.transacBankAcc[0]}
                  date={oneData.transacDate}
                  time={oneData.transacTime}
                  amt={oneData.transacAmt}
                  category={oneData.transacName}
                />
              ))}
            </div>
          </motion.div>

          <div className="pt-chart-container">
            {shopPie === undefined || shopPie === 0 ? (
              <h1>loading...</h1>
            ) : (
              <Chart
                shopSum={shopPie}
                foodSum={foodPie}
                enterSum={enterPie}
                totalSum={totalSum}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentTracker;
