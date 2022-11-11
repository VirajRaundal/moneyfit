import React from 'react'
import "../styles/components/PaymentTrackerCard.css";

const PaymentTrackerCard = (props) => {
  return (
    <div className='ptc-body'>

      <div className='ptc-left-side'>
        <div className='ptc-avatar'>
          A
        </div>
        <div className='ptc-details'>
          <h1>Sent to Yogi Adityanath 🙏</h1>
          <p>10 Nov, 17:50</p>
        </div>
      </div>

      <div className='ptc-right-side'>
        <h1>- ₹164</h1>
        <p>Sent from SBI</p>
      </div>
    </div>
  )
}

export default PaymentTrackerCard