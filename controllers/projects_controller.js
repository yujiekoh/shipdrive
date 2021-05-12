// Dependencies
const express = require("express");
const Project = require("../models/projects.js");
const projects = express.Router();

// Routes
// Create
projects.post("/", (req, res) => {
    Project.create(req.body, (error, createdProject) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).send(createdProject);
    });
})

// Read - Get all projects
projects.get("/", (req, res) => {
  Project.find({}, (err, foundProjects) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundProjects);
  });
});

// Read - Get 1 project by id on Project Details page
// projects.get("/:id", (req, res) => {
//   Project.findById(id, (err, foundProject) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     }
//     res.status(200).json(foundProject);
//   });
// });

// Update

// Delete


// Export
module.exports = projects;