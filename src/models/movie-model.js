import db from "../config/db.js";


const movieSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  classification: {
    type: String,
    enum: ["livre", "maior16", "maior18"],
    required: true,
  },
});

const Movie = db.model("Movie", movieSchema);

export default Movie;
