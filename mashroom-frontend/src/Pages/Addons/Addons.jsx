import React from 'react';
import axios from "axios";

const TG = window.Telegram.WebApp;
const INVOICE_URL = 'https://lovely-cactus-a12d45.netlify.app/.netlify/functions/api/generateInvoice';

const Addons = () => {

  const pay = async () => {
    axios.post(`${INVOICE_URL}`).then(response => {
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
    <div style={{backgroundColor:"yellow"}}>
      <button onClick={pay}>Pay!</button>
    </div>
  )
}

export default Addons;
