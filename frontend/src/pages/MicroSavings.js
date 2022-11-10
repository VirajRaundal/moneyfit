import React, { useEffect, useState } from 'react'

const MicroSavings = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  const [roundedAmt, setRoundedAmt] = useState()

  useEffect(() => {
    fetch("https://gullak-hackophilia.herokuapp.com/payment-history")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const num = data[0].transacAmt;
        setRoundedAmt(roundUpNearest10(num));
        console.log(num)
        setLoad(false);
      });
  }, [])

  function roundUpNearest10(num) {
    return Math.ceil(num / 10) * 10;
  }

  return (
    <div>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{roundedAmt}</h1>
        </div>
      )}
    </div>
  );
}

export default MicroSavings;