import React from 'react'
import Mushroom from '../../Components/Mushrooms/Mushroom'
import './Main.css'
import TotalEarnedCoins from '../../Components/TotalEarnedCoins/TotalEarnedCoins'
import EnergyField from '../../Components/EnergyField/EnergyField'

const Main = () => {
  return (
    <div className="main-page">
      <TotalEarnedCoins />
      <Mushroom />
      <EnergyField />
    </div>
  )
}

export default Main
