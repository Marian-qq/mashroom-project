// import dotenv from 'dotenv';
// import mysql from 'mysql2/promise';

// dotenv.config();

// const connection = async () => {
//     try {
//         const db = await mysql.createConnection({
//             host: process.env.MYSQL_HOST,
//             user: process.env.MYSQL_USER,
//             password: process.env.MYSQL_PASSWORD,
//             database: process.env.MYSQL_DATABASE,
//             port: process.env.MYSQL_PORT
//         });
//         console.log('Database connected successfully');    
//         return db;
//     } catch (error) {
//         console.log('Error while connecting with the database');
//         throw error;
//     }
// };

// export default await connection();