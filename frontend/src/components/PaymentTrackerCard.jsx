import React from 'react'
import "../styles/components/PaymentTrackerCard.css";
import randomColor from "randomcolor";

const PaymentTrackerCard = (props) => {
  return (
    <div className='ptc-body'>

      <div className='ptc-left-side'>
        <div className='ptc-avatar' style={{backgroundColor: `${randomColor()}`}}>
          {props.logo}
        </div>
        <div className='ptc-details'>
          <h1>Sent to {props.name}</h1>
          <p>{`${props.date}, ${props.time}`}</p>
        </div>
      </div>

      <div className='ptc-right-side'>
        <h1>- ₹{props.amt}</h1>
        <p>Sent from SBI</p>
      </div>
    </div>
  )
}

export default PaymentTrackerCard