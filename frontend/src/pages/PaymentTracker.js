import React, { useEffect, useState } from "react";
import "../styles/pages/PaymentTracker.css";
import PaymentTrackerCard from "../components/PaymentTrackerCard";
import Chart from "../components/Chart";
import Loader from "../lib/loader";
import {motion} from "framer-motion"

const PaymentTracker = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  const [foodPie, setFoodPie] = useState(0);
  const [shopPie, setShopPie] = useState(0);
  const [enterPie, setEnterPie] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    fetch("https://gullak-backend.onrender.com/payment-complete-history")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoad(false);
        console.log(data);

        let shopSum = 0;
        let foodSum = 0;
        let enterSum = 0;

        for (let i = 0; i < data.length; i++) {
          if (data[i].transacName === "Shopping")
            shopSum = shopSum + data[i].transacAmt;
          else if (data[i].transacName === "Food")
            foodSum = foodSum + data[i].transacAmt;
          else if (data[i].transacName === "Entertainment")
            enterSum = enterSum + data[i].transacAmt;
        }

        setShopPie(shopSum);
        setFoodPie(foodSum);
        setEnterPie(enterSum);

        setTotalSum(shopSum + foodSum + enterSum);
      });
  }, []);

  return (
    <div className="pt-body">
      {load ? (
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
              {data.map((oneData, key) => (
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
