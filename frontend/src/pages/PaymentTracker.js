import React from 'react'

const PaymentTracker = () => {

  const date = new Date();
  
  const result2 = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })
  console.log(result2)

  const result = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  console.log(result)

  return (
    <div>PaymentTracker</div>
  )
}

export default PaymentTracker