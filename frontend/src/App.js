import React from "react";
import "./App.css"
import "chart.js/auto"
import {Doughnut} from "react-chartjs-2"
// import canvas from "react-chartjs-2";

function App() {

  const state = {
    labels: ["Food", "Entertainment", "Shopping", "Bills", "Travel"],
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
        data: [400, 1000, 899, 300, 1500],
      },
    ],
  };

  return (
    <div className="App">
      {/* <canvas width={1000} height={1000}> */}
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "Rainfall Distribution",
            fontSize: 24
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
        className="chartClass"
      />
      {/* </canvas> */}
    </div>
  );
}

export default App;
