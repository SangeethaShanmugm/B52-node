// const express = require('express')//Inbuilt package
// const { MongoClient } = require('mongodb');
import express from 'express';
import { MongoClient } from 'mongodb'
// const dotenv = require('dotenv').config()
import * as dotenv from 'dotenv'
import cors from "cors"
import bcrypt from "bcrypt"
import { productRouter } from './routes/products.js';
import { userRouter } from "./routes/users.js"
const app = express()
app.use(cors())

dotenv.config()


const PORT = process.env.PORT
//req => what you send to server
//res => what you receive from server

//Inbuilt middleware
app.use(express.json()) //interpretor || converting body to json

const MONGO_URL = process.env.MONGO_URL
//"mongodb://127.0.0.1:27017"
//"mongodb://localhost:27017"
//Mongo connection 

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    client.connect()
    console.log("MONGODB connected")
    return client;
}

export const client = await createConnection();


//REST API Endpoints
app.get('/', (req, res) => {
    res.send('Hello Everyone')
})

app.use("/products", productRouter)


app.use("/users", userRouter)


app.listen(PORT, () => console.log("Server started on the PORT", PORT))


