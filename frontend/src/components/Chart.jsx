import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "../styles/components/Chart.css";
// import canvas from "react-chartjs-2";

function Chart(props) {
  const state = {
    labels: ["Food", "Entertainment", "Shopping"],
    datasets: [
      {
        label: "Expenditure",
        backgroundColor: [
          "#ff8080",
          "#99bbff",
          "#99ffd6",
          "#ffcc99",
          "#ff99ff",
        ],
        // hoverBackgroundColor: [
        //   "#501800",
        //   "#4B5000",
        //   "#175000",
        //   "#003350",
        //   "#35014F",
        // ],
        hoverOffset: 10,
        data: [props.foodSum, props.enterSum, props.shopSum],
      },
    ],
  };

  return (
    <div className="chart-body">
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", gap: "10px", backgroundColor: "transparent", width: "500px", height: "500px", zIndex: -1}}>
        <p style={{fontSize: 24, fontWeight: 600}}>Total Spent</p>
        <p style={{fontSize: 18}}>₹ {props.totalSum}</p>
      </div>
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "Your Expense Distribution",
            fontSize: 24,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
        className="chart-class"
      />
    </div>
  );
}

export default Chart;