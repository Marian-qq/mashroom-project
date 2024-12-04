import React from "react";
import { store } from "../../Store/store";
import { observer } from "mobx-react";
import coinIcon from "../../Images/coin-icon.png";
import "./TotalEarnedCoins.css";

const TotalEarnedCoins = observer(() => {
  return (
    <div className="coins-field">
      <img src={coinIcon} alt="coin-icon.png" />
      <span>{store.totalEarnedCoins}</span>
    </div>
  );
});

export default TotalEarnedCoins;
