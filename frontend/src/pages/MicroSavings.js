import React, { useEffect, useState } from 'react';
import MicroSavingsCard from '../components/MicroSavingsCard';
import "../styles/pages/MicroSavings.css";

const MicroSavings = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  const [roundedAmt, setRoundedAmt] = useState();
  const [totalAmt, setTotalAmt] = useState();
  const [finalAmt, setFinalAmt] = useState(2500);

  useEffect(() => {
    fetch("https://gullak-hackophilia.herokuapp.com/payment-complete-history")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const size = data.length
        const num = data[size-1].transacAmt;
        setRoundedAmt(roundUpNearest10(num));
        setLoad(false);

        let sum = 0;
        for(let i=0; i<size; i++) {
          sum = sum + (roundUpNearest10(data[i].transacAmt) - data[i].transacAmt)
        }
        setTotalAmt(sum);
      });
  }, [])

  function roundUpNearest10(num) {
    return Math.ceil(num / 10) * 10;
  }


  return (
    <div className='ms-body'>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <div className='ms-sub-body'>
          <div className="ms-payment-container">
            <h1>Payment History</h1>
            <div className='ms-card-container'>
              {data.map((oneData, key) => (
                <MicroSavingsCard
                transacBankAcc = {oneData.transacBankAcc}
                transacAmt = {oneData.transacAmt}
                transacName = {oneData.transacName}
                addedAmt = {roundUpNearest10(oneData.transacAmt) - oneData.transacAmt}
                numKey={key}
                />
              ))}
            </div>
          </div>

          <div className='ms-saving-container'>
            <h1>
              Your savings
            </h1>
            <div>
              <h1>{totalAmt}</h1>
            </div>
            <button onClick={() => {
              setFinalAmt(prev => prev+totalAmt)
              setTotalAmt(0)
            }}>Send to piggy bank</button>
          </div>
        </div>
      )}
      
      <div className='ms-bottom'>
        <div className='ms-piggy-bank'>
          <p>₹ {finalAmt}</p>
        </div>
      </div>
    </div>
  );
}

export default MicroSavings;