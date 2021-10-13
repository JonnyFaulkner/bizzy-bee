import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Ji8YZI24J6rK8d6mHGQ848bdKqpOWOkRvoCuKNT1i0121nYQ2JRUofiYraVxJnE7wP08IYSmfBklodecHQalmO800AfSIw7gH"
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);
