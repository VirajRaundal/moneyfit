import React from 'react'

const MicroSavings = () => {

  function roundUpNearest10(num) {
    return Math.ceil(num / 10) * 10;
  }

  const num = 398;
  console.log(roundUpNearest10(num) - num);

  return (
    <div>

    </div>
  )
}

export default MicroSavings