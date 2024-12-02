import React, { useEffect } from 'react'
import { store } from '../../Store/store'
import { observer } from 'mobx-react';

const EnergyField = observer(() => {

    useEffect(() => {
      const maxEnergy = 15;
      const interval = setInterval(() => {
        if (store.totalEnergy < maxEnergy) {
          store.increaseTotalEnergy();
        }
      }, 3000);

      return () => clearInterval(interval);
    }, []);      

    return (
        <div style={{fontSize:"36px", backgroundColor:"red"}}>
            Energy: {store.totalEnergy}/15
        </div>
    )
})

export default EnergyField
