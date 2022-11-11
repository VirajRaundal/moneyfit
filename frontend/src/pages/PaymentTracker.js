import React, { useEffect, useState } from 'react';
import randomColor from "randomcolor";
import "../styles/pages/PaymentTracker.css";
import PaymentTrackerCard from '../components/PaymentTrackerCard';

const PaymentTracker = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://gullak-hackophilia.herokuapp.com/payment-complete-history")
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoad(false);
      })
  })

  return (
    <div>
      {load ? <h1>Loading...</h1> : (
        <div className='pt-card-container'>
          {data.map(oneData => <PaymentTrackerCard />)}
        </div>
      )}
    </div>
  )
}

export default PaymentTracker