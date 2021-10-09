// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "sk_test_51Ji8YZI24J6rK8d6qHJlftYZA8EtvGOZzsEboIo42nGz0njHyiOPDuahTsqkOzDN7vREPSTkVkpOLW9lT6yAwhWk00YOTSvOnz"
);

const paymentIntent = await stripe.paymentIntents.create({
  amount: 5000,
  currency: 'usd',
  payment_method_types: ['card'],
});
