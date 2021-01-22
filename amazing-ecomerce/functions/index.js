const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);    // STRIPE_SECRET_KEY

// API
// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('Hello world from express API'));
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment Request Recieved: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api= functions.https.onRequest(app)

// Example endpoint
// http://localhost:5002/amazing-ecomerce/us-central1/api