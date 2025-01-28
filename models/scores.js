import mongoose from "mongoose";

const scoresSchema = mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true }
  });

const Scores = mongoose.model('Scores', scoresSchema);
export default Scores;