import React from 'react';
import axios from "axios";
import { store } from "../../Store/store";

import "./Addons.css";
import Star from "./Star";

const TG = window.Telegram.WebApp;
const INVOICE_URL = 'https://lovely-cactus-a12d45.netlify.app/.netlify/functions/api/generateInvoice';
const ADD_ENERGY_URL = `https://lovely-cactus-a12d45.netlify.app/.netlify/functions/api/addEnergy?tgId=${store.user.tg_id}`;

const Addons = () => {

  const buyEnergy = async (energyAmount) => {
    await axios.post(`${INVOICE_URL}`, {
      energy: energyAmount,
    }).then(response => {
        console.log(response);
        TG.openInvoice(response.data.invoiceLink, (status) => {
            console.log(status);
            if (status === "paid") {
              axios.post(`${ADD_ENERGY_URL}`, {
                energy: energyAmount,
              })
            }
        });
    });
  }

  return (
    <>
      <div className="addons-container">
        <h1>Boost your energy</h1>
        <div className="buy-energy-block" onClick={() => buyEnergy(5)}>
          +5 Energy
          <i className="buy-energy-item">
            <Star />
          </i>
            5
        </div>
        <div className="buy-energy-block" onClick={() => buyEnergy(10)}>
          +10 Energy
          <i className="buy-energy-item">
            <Star />
          </i>
            10
        </div>
        <div className="buy-energy-block" onClick={() => buyEnergy(15)}>
          +15 Energy
          <i className="buy-energy-item">
            <Star />
          </i>
            15
        </div>
        <div className="buy-energy-block" onClick={() => buyEnergy(20)}>
          +20 Energy
          <i className="buy-energy-item">
            <Star />
          </i>
            20
        </div>
      </div>
    </>
    
  )
}

export default Addons;
