import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(HttpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
