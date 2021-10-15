const express = require("express");
const cors = require("cors");
const path = require("path");
const createPaymentIntent = require("./models/payment");
const env = require("dotenv").config({ path: "../.env" });
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// STRIPE API

app.get("/secret", async (req, res) => {
  const intent = await createPaymentIntent();
  res.json({ client_secret: intent.client_secret });
});

//

app.get("*", (req, res) => {
  res.sendFile(__dirname, "/client/public/");
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
