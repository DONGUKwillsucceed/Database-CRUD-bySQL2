import mysql from 'mysql2';
import { config } from '../config.js';

const pool = mysql.createPool({
    host: config.host,
    user : config.user,
    database: config.database,
    password: config.password,
});

export const db = pool.promise();

