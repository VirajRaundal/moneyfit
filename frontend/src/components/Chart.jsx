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
        label: "Rainfall",
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
