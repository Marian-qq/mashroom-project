import React, { useEffect } from "react";
import { store } from "../../Store/store";
import { observer } from "mobx-react";
import energyIcon from "../../Images/energy-icon.png";
import "./EnergyField.css";

const EnergyField = observer(() => {
  const maxEnergy = 15;
  const totalEnergy = store.totalEnergy || 0;
  const energyPercentage = (totalEnergy / maxEnergy) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (store.totalEnergy < maxEnergy) {
        store.increaseTotalEnergy();
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
            totalEnergy === maxEnergy || totalEnergy > 10
              ? "#dbd10d"
              : totalEnergy > 4
              ? "#e6870b"
              : "#c71010"
        }}
      ></div>
      <div className="energy-field-attempts">
        <img src={energyIcon} alt="energy-icon.png" />
        <span>
          {totalEnergy}/{maxEnergy}
        </span>
      </div>
    </div>
  );
});

export default EnergyField;
