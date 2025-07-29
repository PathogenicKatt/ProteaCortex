const express = require('express');
const router = express.Router();
const { processLog } = require('../services/log');

let logs = []; 

router.post('/', (req, res) => {
  const newLog = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...req.body
  };
  
  logs.push(newLog);
  processLog(newLog); // Basic analysis
  
  res.status(201).json(newLog);
});

router.get('/', (req, res) => {
  res.json(logs.slice(-50)); // Return last 50 logs
});

module.exports = router;