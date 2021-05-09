const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = Schema({
  owner_id: { type: String, required: true },
  owner_username: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  tickets: [
    {
      ticket_id: { type: Schema.Types.ObjectId, ref: "Ticket" },
    },
  ],
  assigned_personnel: [
    {
      _id: false,
      user_id: { type: String, required: true },
      username: { type: String, required: true },
      role: { type: String, required: true },
      email: { type: String, required: true },
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
