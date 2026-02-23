// Resolvers define the technique for fetching the types defined in the schema.

import Movie from '../models/Movie.js';

const movieResolvers = {
  Query: {
    getAllMovies: async () => {
      return await Movie.find();
    },

    getMovieById: async (_, { id }) => {
      return await Movie.findById(id);
    },

    getMoviesByDirectorName: async (_, { director_name }) => {
      return await Movie.findByDirectorName(director_name);
    },
  },

  Mutation: {
    insertMovie: async (_, { movie }) => {
      const newMovie = new Movie(movie);
      const savedMovie = await newMovie.save();
      return savedMovie;
    },

    updateMovie: async (_, { id, movie }) => {
      const updated = await Movie.findByIdAndUpdate(
        id,
        { $set: movie },
        { new: true, runValidators: true }
      );
      return updated;
    },

    deleteMovieById: async (_, { id }) => {
      const deleted = await Movie.findByIdAndDelete(id);
      return deleted ? true : false;
    },
  },

  Movie: {
    movie_age: (parent) => parent.movie_age,
    movie_summary: (parent) => parent.getMovieSummary(),
  },
};

export default movieResolvers;