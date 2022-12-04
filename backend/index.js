require('dotenv').config();

const connection = require("./db");
const express = require('express');
const cors = require("cors");
const app =express();
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

//Database Connection 
connection()

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log('Listening on port '+ port+'..'));


 