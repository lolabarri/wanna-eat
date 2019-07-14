const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultsSchema = new Schema(
  {
    matchday: Number,
    matches: [
      {
        type: String,
        required: true
      }
    ],
    resultados: [
      {
        type: String,
        required: true
      }
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);


const Results = mongoose.model('Results', ResultsSchema);
module.exports = Results;