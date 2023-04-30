import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
}).promise();
