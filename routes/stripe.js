const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require("stripe")('sk_test_51M5q2SJnpheM3nRnsiRehAosv4g8Kd3PUnUbWhWdHyuCDIhSxloLvF2p310B7HucLoZme9M0mjB5g0oLNcoag4km00rz0opUwu')


router.post("/payment",  async(req, res) => {

 
  // await stripe.paymentIntents.create(
  //   {
  //     amount: 200,
  //     currency: "INR",
  //     payment_method_types: ["card"],
  //      receipt_email: "amitsingh90748@gmail.com",
  //   }

 stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    }
  ,
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;