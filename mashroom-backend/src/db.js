import dotenv from 'dotenv';
import mysql  from 'mysql2/promise';

dotenv.config();

const connectionPool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    waitForConnections    : true,
    connectionLimit       : 3,
    maxIdle               : 3, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout           : 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit            : 0,
    enableKeepAlive       : true,
    keepAliveInitialDelay : 0,
  });

  export default async function getConnection() {
    try {
      const connection = await connectionPool.getConnection();   
      return connection;
    } catch (error) {
        console.log('Error while connecting with the database');
        throw error;
    }
  }