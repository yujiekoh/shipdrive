const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = Schema({
  project_id: { type: Schema.Types.ObjectId, ref: "Project" },
  project_name: { type: String, required: true },
  type: { type: String, required: true },
  summary: { type: String, required: true },
  description: { type: String },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  assignee_id: { type: String },
  assignee_username: { type: String },
  reporter_id: { type: String, required: true },
  reporter_username: { type: String, required: true },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;