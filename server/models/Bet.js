const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    matchday: Number,
    apuestas: [
      {
        type: String,
        required: true
      }
    ],
    partidos: [
      {
        type: String,
        required: true
      }
    ],
    isChecked: Boolean
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Bet = mongoose.model("Bet", betSchema);
module.exports = Bet;
