import React, { useState, useEffect } from "react";
import CheckoutForm from "./CheckoutForm";

function Payments() {
  const [secret, setSecret] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/secret")
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJson) {
        const clientSecret = responseJson.client_secret;
        setSecret(clientSecret);
        // Render the form to collect payment details, then
        // call stripe.confirmCardPayment() with the client secret.
      });
  }, []);

  if (!secret) return <h4>Loading...</h4>;

  return (
    <div className="Payments">
      <CheckoutForm secret={secret} />
    </div>
  );
}

export default Payments;
