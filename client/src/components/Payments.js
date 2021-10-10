import React, { useState, useEffect } from "react";

function Payments() {
  const [secret, setSecret] = useState();

  useState(() => {
    const response = fetch("http://localhost:3001/secret")
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

  if (!secret) {
    console.log("loading");
  } else {
    console.log(secret);
  }

  return (
    <div>
      <h1>Payments</h1>
    </div>
  );
}

export default Payments;
