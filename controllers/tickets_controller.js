// Dependencies
const express = require("express");
const Ticket = require("../models/tickets.js");
const tickets = express.Router();

// Routes
// Create
tickets.post("/", (req, res) => {
  Ticket.create(req.body, (error, createdTicket) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdTicket);
  });
});

// Read - Get all tickets
tickets.get("/", (req, res) => {
  Ticket.find({}, (err, foundTickets) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundTickets);
  });
});

// Update

// Delete

// Export
module.exports = tickets;
