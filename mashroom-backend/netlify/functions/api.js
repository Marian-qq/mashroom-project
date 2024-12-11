import getConnection from '../../src/db.js'

import crypto from 'crypto';
import cors from 'cors';
import express, { Router } from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';
import { Bot } from 'grammy';

const api = express();
const router = Router();

const port = 3001;

const corsOptions = {
    origin: ['http://localhost:3000', 'https://sage-crepe-00029a.netlify.app'],
    optionsSuccessStatus: 200
};
api.use(cors(corsOptions)); 

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

const bot = new Bot('7934830610:AAFscp1fRQx3mkOKBmRFmITKDJN7PSGEYEE');

router.get("/getUser", async (req, res) => {
    return getUser(req, res);
});

router.post("/createUser", async (req, res) => {
    return createUser(req, res);
});

router.post("/addCoins", async (req, res) => {
    return addCoins(req, res);
});

router.post("/generateInvoice", async (req, res) => {
    const data = req.body;
    const energy = data.energy;

    const title = `+ ${energy} Energy`;
    const description = `Buy Energy`;
    const payload = "{}";
    const currency = "XTR";
    const prices = [{ amount: energy, label: "Energy" }];
  
    const invoiceLink = await bot.api.createInvoiceLink(
      title,
      description,
      payload,
      "", // Provider token must be empty for Telegram Stars
      currency,
      prices,
    );
  
    res.json({ invoiceLink });
});

const getUser = async (req, res) => {
    const tgId = req.query.tgId;

    const sql = "SELECT * FROM user WHERE tg_id = ?";

    const connection = await getConnection();
    const [rows] = await connection.query(sql, [tgId]);

    if (connection) connection.release();
    
    return res.status(201).json({ content: rows[0] });
};

const createUser = async (req, res) => {
    const data = req.body;

    const tgId = data.tgId;
    const tgUuid = crypto.randomUUID();
    const name = data.tgUserName;;

    const uuid = crypto.randomUUID();
    const coins = 10000;
    const createdAt = new Date();
    const updatedAt = createdAt;

    const sql = "INSERT INTO user (uuid, tg_id, tg_uuid, name, coins, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const connection = await getConnection();
    await connection.query(sql, [uuid, tgId, tgUuid, name, coins, createdAt, updatedAt]);

    if (connection) connection.release();
    
    return res.status(201).json({ message: "User has been created" });
};

const addCoins = async (req, res) => {
    const tgId = req.query.tgId;
    
    const sql = "UPDATE user SET coins = coins + 1 WHERE tg_id = ?";
    
    const connection = await getConnection();
    await connection.query(sql, [tgId]);

    if (connection) connection.release();
    
    return getUser(req, res);
};

api.use("/.netlify/functions/api", router);

api.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});

export const handler = serverless(api);
