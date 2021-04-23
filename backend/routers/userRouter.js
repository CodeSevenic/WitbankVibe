// import express from 'express';
const express = require('express');
// import data from '../data';
const data = require('../data');
// import User from '../models/userModels.js';
const User = require('../models/userModels');

const userRouter = express.Router();

userRouter.get('/seed', async (req, res) => {
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
});

module.exports = userRouter;
