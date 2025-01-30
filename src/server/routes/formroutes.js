// routes/formRoutes.js

const express = require("express");
const emailController = require("../utils/nodemailer");

const router = express.Router();

// POST route to handle form submission and email sending
router.post("/send-email", emailController.sendBooking);

router.post("/send-feedback", emailController.sendFeedback);

module.exports = router;
