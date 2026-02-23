import { gql } from 'graphql-tag';

const movieSchema = gql`
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
    movie_age: Int
    movie_summary: String
  }

  input MovieInput {
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  input MovieUpdateInput {
    name: String
    director_name: String
    production_house: String
    release_date: String
    rating: Float
  }

  type Query {
    getAllMovies: [Movie!]!
    getMovieById(id: ID!): Movie
    getMoviesByDirectorName(director_name: String!): [Movie!]!
  }

  type Mutation {
    insertMovie(movie: MovieInput!): Movie!
    updateMovie(id: ID!, movie: MovieUpdateInput!): Movie
    deleteMovieById(id: ID!): Boolean!
  }
`;

export default movieSchema;