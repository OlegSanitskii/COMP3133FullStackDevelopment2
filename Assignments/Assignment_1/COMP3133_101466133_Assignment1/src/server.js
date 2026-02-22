require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");

const { connectDB } = require("./config/db");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");
const { authRequired } = require("./middleware/auth");
const { initCloudinary } = require("./config/cloudinary");

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));

const DateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar (ISO string)",
  serialize(value) {
    return new Date(value).toISOString();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) return new Date(ast.value);
    return null;
  },
});

async function start() {
  initCloudinary();
  console.log("Cloudinary configured");

  await connectDB(process.env.MONGO_URI);

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Date: DateScalar,
      ...resolvers,
    },

    
    context: ({ req }) => {
      let user = null;
      try {
        user = authRequired(req); 
      } catch (_) {
        user = null;
      }
      return { req, user };
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
  });
}

start().catch((e) => {
  console.error("Failed to start server:", e);
  process.exit(1);
});