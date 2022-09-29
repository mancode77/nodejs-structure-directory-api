'use strict'

import dotenv from 'dotenv'

if (dotenv.config().error) throw new Error("⚠️  Couldn't find .env file  ⚠️")

export const config = {
    port: Number(process.env.PORT, 10),
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO,

    api: {
        prefix: '/api',
    }
}