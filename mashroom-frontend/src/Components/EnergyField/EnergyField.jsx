import React, { useEffect } from "react";
import { store } from "../../Store/store";
import { observer } from "mobx-react";
import energyIcon from "../../Images/energy-icon.png";
import "./EnergyField.css";

const EnergyField = observer(() => {
  const maxEnergy = store.maxEnergy ;
  const currentEnergy = store.currentEnergy || 0;
  const energyPercentage = (currentEnergy / maxEnergy) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (store.currentEnergy < store.maxEnergy) {
        store.increaseCurrentEnergy();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="energy-field">
      <div
        className="energy-field-percentage"
        style={{
          width: `${energyPercentage}%`,
          backgroundColor:
            currentEnergy === maxEnergy || currentEnergy > 10
              ? "#dbd10d"
              : currentEnergy > 4
              ? "#e6870b"
              : "#c71010"
        }}
      ></div>
      <div className="energy-field-attempts">
        <img src={energyIcon} alt="energy-icon.png" />
        <span>
          {currentEnergy}/{maxEnergy}
        </span>
      </div>
    </div>
  );
});

export default EnergyField;
