const express = require("express");
const path = require("path");
// const paymentIntent = require('./models/payment')
const env = require("dotenv").config({ path: "../.env" });
const { ApolloServer } = require("apollo-server-express");

// const { typeDefs, resolvers } = require("./schemas");
// const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

console.log(process.env.API_KEY);

const PORT = process.env.PORT || 3001;
const app = express();

// const startServer = async () => {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
//   });

//   await server.start();

//   server.applyMiddleware({ app });

//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// };

// startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get("*", (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "./public/404.html"));
// });

app.get("/secret", async (req, res) => {
  const intent = res.json({ client_secret: intent.client_secret }); // ... Fetch or create the PaymentIntent
});

// db.once("open", () => {
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
// });
