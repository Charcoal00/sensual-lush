const nodemailer = require("nodemailer");
require("dotenv").config();

// Create the transporter once
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password
    },
});
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass Loaded:", process.env.EMAIL_PASS ? "Yes" : "No");

// Verify SMTP connection
transporter.verify((error, success) => {
    if (error) {
        console.log("SMTP Error:", error);
    } else {
        console.log("✅ SMTP Server is ready to send emails!");
    }
});

// Send Booking Form Data
exports.sendBooking = async (req, res) => {
    const { name, email, phone, therapy, note, therapist } = req.body;

    // Email to the Admin
    const mailOptionsAdmin = {
        from: `"Website Booking" <${process.env.EMAIL_USER}>`,
        to: "wisestar175@gmail.com", // Replace with actual admin email
        subject: "New Booking Request",
        html: `
            <h2>New Booking Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Therapy Option:</strong> ${therapy}</p>
            <p><strong>Note:</strong> ${note}</p>
            <p><strong>Preferred Therapist:</strong> ${therapist}</p>
        `,
    };

    // Confirmation Email to Client
    const mailOptionsClient = {
        from: `"Sensual Lush Mobile Spa" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Booking Confirmation",
        html: `
            <h2>Your Booking is Confirmed</h2>
            <p>Dear ${name},</p>
            <p>We have received your booking request. Below are the details:</p>
            <p><strong>Therapy:</strong> ${therapy}</p>
            <p><strong>Preferred Therapist:</strong> ${therapist}</p>
            <p>We will contact you shortly to confirm the details.</p>
            <p>Thank you for choosing Sensual Lush Mobile Spa!</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptionsAdmin);
        await transporter.sendMail(mailOptionsClient);

        console.log("✅ Booking emails sent successfully");
        res.status(200).send("Booking request submitted successfully!");
    } catch (error) {
        console.error("❌ Error sending booking emails:", error.message);
        res.status(500).send("Error sending emails.");
    }
};

// Send Feedback Form Data
exports.sendFeedback = async (req, res) => {
    const { firstName, lastName, email, phone, request } = req.body;

    const mailOptions = {
        from: `"User Feedback" <${process.env.EMAIL_USER}>`,
        to: "wisestar175@gmail.com", // Admin email to receive feedback
        subject: `New Feedback from ${firstName} ${lastName}`,
        html: `
            <h2>New Feedback Received</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Request:</strong> ${request}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Feedback email sent successfully");
        res.status(200).send("Feedback submitted successfully!");
    } catch (error) {
        console.error("❌ Error sending feedback email:", error.message);
        res.status(500).send("Error sending feedback email.");
    }
};
