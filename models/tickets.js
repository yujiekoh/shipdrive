const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = Schema({
  project_id: { type: Schema.Types.ObjectId, ref: "Project" },
  type: { type: String, unique: true, required: true },
  summary: { type: String, required: true },
  description: { type: String },
  priority: { type: String, unique: true, required: true },
  status: { type: String, unique: true, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  assignee_id: { type: String, unique: true, required: true },
  reporter_id: { type: String, unique: true, required: true },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;