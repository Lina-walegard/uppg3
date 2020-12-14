import React from "react";

function Coin(props) {
  return (
    <div className="coinWrapper">
      <label className="labelItem">{props.title}</label>
      <label className="labelItemPrice">{props.price} :-</label>
      <input
        min="0"
        className="coinInput"
        type="number"
        value={props.amount}
        onChange={props.updateInput}
        name={props.name}
      />

      <label className="labelSum">{props.sum} :-</label>
    </div>
  );
}

export default React.memo(Coin);
