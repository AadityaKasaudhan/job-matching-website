const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

// Post a job
router.post('/', async (req, res) => {
  const { title, description, skillsRequired, employer } = req.body;

  const newJob = new Job({ title, description, skillsRequired, employer });

  try {
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
