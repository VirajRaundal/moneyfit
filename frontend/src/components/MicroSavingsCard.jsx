import React from "react";
import { FcShop, FcClapperboard } from "react-icons/fc";
import { MdOutlineFastfood } from "react-icons/md";
import "../styles/components/MicroSavingsCard.css";
import "../App.css";

const MicroSavingsCard = (props) => {
  const iconArray = [
    <MdOutlineFastfood size={40} color={"#ff6565"} />,
    <FcClapperboard size={40} />,
    <FcShop size={40} />,
  ];

  let imageArray = 0;
  if (props.transacName === "Food") imageArray = 0;
  else if (props.transacName === "Entertainment") imageArray = 1;
  else if (props.transacName === "Shopping") imageArray = 2;

  let color = "";

  if (props.numKey % 2 === 0) color = "#c7d0ff";
  else if (props.numKey % 2 === 1) color = "#ffffff";

  return (
    <div className="msc-body" style={{ backgroundColor: `${color}` }}>
      <div className="msc-desc">
        {iconArray[imageArray]}
        <p>{props.transacBankAcc}</p>
      </div>
      <div className="msc-amt">
        <p>₹ {props.transacAmt}</p>
        <div></div>
        <p>+ ₹ {props.addedAmt}</p>
      </div>
    </div>
  );
};

export default MicroSavingsCard;
