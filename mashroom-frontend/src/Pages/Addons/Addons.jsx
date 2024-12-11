import React from 'react';
import axios from "axios";

import "./Addons.css";
import Star from "./Star";

const TG = window.Telegram.WebApp;
const INVOICE_URL = 'https://lovely-cactus-a12d45.netlify.app/.netlify/functions/api/generateInvoice';

const Addons = () => {

  const buyEnergy = async (energyAmount) => {
    axios.post(`${INVOICE_URL}`, {
      energy: energyAmount,
    }).then(response => {
        console.log(response);
        TG.openInvoice(response.data.invoiceLink, (status) => {
            console.log(status);
            if (status === "paid") {
                console.log('Invoice paid!');
            }
        });
    });
  }

  return (
    <>
      <div class="Dfsfef4f">
        <div class="F5BTkZ9G" onClick={() => buyEnergy(5)}>
          +5 Energy
          <i class="qEhgJEpm GjxPnwZR">
            <Star />
          </i>
            5
        </div>
        <div class="F5BTkZ9G" onClick={() => buyEnergy(10)}>
          +10 Energy
          <i class="qEhgJEpm GjxPnwZR">
            <Star />
          </i>
            10
        </div>
        <div class="F5BTkZ9G" onClick={() => buyEnergy(15)}>
          +15 Energy
          <i class="qEhgJEpm GjxPnwZR">
            <Star />
          </i>
            15
        </div>
      </div>
    </>
    
  )
}

export default Addons;
