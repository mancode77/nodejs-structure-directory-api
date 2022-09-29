"use strict"

import mysql from "mysql";
import { config } from './../configs';

const { dbHost, dbUser, dbPass, dbName } = config;

/**
 * @description Koneksi MySQL
 * @returns Object koneksi MySQL
 */
export const mysqlConnection = () => {
    return mysql.createConnection({ dbHost, dbUser, dbPass, dbName });
}