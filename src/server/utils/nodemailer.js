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
    const {
        name,
        date,
        email,
        phone,
        theraphySelect,
        note,
        theraphistSelect,
        happyEndings,
    } = req.body;

    // Email to the Admin
    const mailOptionsAdmin = {
        from: `"Website Booking" <${process.env.EMAIL_USER}>`,
        to: "wisestar175@gmail.com", // Replace with actual admin email
        subject: "New Booking Request",
        html: `
        <html>

        <body style="font-family: Arial, Helvetica, sans-serif; padding: 20px 5%; box-sizing: border-box;">
            <div>
                <h1 style="text-align: center; font-size: 1.5rem">Sensual lush mobile spa</h1>
                <h2 style="color: #E80385 !important; font-size: 1.3rem;">New Booking request</h2>
                <p style="font-size: 20px;">Client details summary:</p>
                <div style="padding: 15px; border: 1px solid black;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone number:</strong> +234${phone}</p>
                    <p><strong>Booking date:</strong> ${date}</p>
                    <P><strong>Theraphy:</strong> ${theraphySelect}</P>
                    <p><strong>Prefered therapist:</strong> ${theraphistSelect}</p>
                    <p><strong>Added note:</strong> ${note}</p>
                    <p><strong>Happy endings:</strong> ${happyEndings}</p>
                </div>
                <p style="font-size: 1rem; line-height: 30px;">If you encounter any issues during booking, please do not
                    hesitate to contact our support at <a href="sensuallushmobiespa@gmail.com"
                        style="color: #E80385 !important; font-weight: 600; display: inline-block;">sensuallushmobiespa@gmail.com</a>.
                </p>
            </div>
            <script>
                const updatBG = () => {
                    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.body.style.backgroundColor = darkMode ? '#fff' : '#000';
                    document.body.style.color = darkMode ? '#000' : '#fff';
                    document.body.style.borderBlockColor = darkMode ? '#000' : '#fff';
                }
                updatBG();
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updatBG)
            </script>
        </body>

        </html>
        `,
    };

    // Confirmation Email to Client
    const mailOptionsClient = {
        from: `"Sensual Lush Mobile Spa" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Booking Confirmation",
        html: `
        <html>

            <body style="font-family: Arial, Helvetica, sans-serif; padding: 20px 5%; box-sizing: border-box;">
                <div>
                    <h1 style="text-align: center; font-size: 1.5rem">Sensual lush mobile spa</h1>
                    <h2 style="color: #E80385 !important; font-size: 1.3rem;">Your booking is confirmed</h2>
                    <p style="font-size: 20px;">Client details summary:</p>
                    <div style="padding: 15px; border: 1px solid black;">
                    <p>Dear ${name},</p>
                    <p>We have received your booking request. Below are the details:</p>
                    <p><strong>Therapy:</strong> ${theraphySelect}</p>
                    <p><strong>Preferred Therapist:</strong> ${theraphistSelect}</p>
                    <p><strong>Booking date:</strong> ${date}</p>
                    <p><strong>Happy endings:</strong> ${happyEndings}</p>
                    <p>We will contact you shortly to confirm the details.</p>
                    <p>Thank you for choosing Sensual Lush Mobile Spa!</p>
                    </div>
                    <p style="font-size: 1rem; line-height: 30px;">If you did not book this or encounter any issues during booking, please do not
                        hesitate to contact our support at <a href="sensuallushmobiespa@gmail.com"
                            style="color: #E80385 !important; font-weight: 600; display: inline-block;">sensuallushmobiespa@gmail.com</a>.
                    </p>
                </div>
                <script>
                    const updatBG = () => {
                        const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                        document.body.style.backgroundColor = darkMode ? '#fff' : '#000';
                        document.body.style.color = darkMode ? '#000' : '#fff';
                        document.body.style.borderBlockColor = darkMode ? '#000' : '#fff';
                    }
                    updatBG();
                    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updatBG)
                </script>
            </body>

        </html>
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
    const { nameTwo, emailTwo, phoneTwo, message } = req.body;

    const mailOptions = {
        from: `"Client Feedback" <${process.env.EMAIL_USER}>`,
        to: "wisestar175@gmail.com", // Admin email to receive feedback
        subject: `New Feedback from ${nameTwo}`,
        html: `
        <html>

<body style="font-family: Arial, Helvetica, sans-serif; padding: 20px 5%; box-sizing: border-box;">
    <div>
        <h1 style="text-align: center; font-size: 1.5rem">Sensual lush mobile spa</h1>
        <h2 style="color: #E80385 !important; font-size: 1.3rem;">Feedback Recieved</h2>
        
        <div style="padding: 15px; border: 1px solid black;">
            <p><strong>Name:</strong> ${nameTwo}</p>
            <p><strong>Email:</strong> ${emailTwo}</p>
            <p><strong>Phone number:</strong> +234${phoneTwo}</p>
            <p><strong>Client Feedback:</strong> ${message}</p>
        </div>
        <p style="font-size: 1rem; line-height: 30px;">If you encounter any issues during booking, please do not
            hesitate to contact our support at <a href="sensuallushmobiespa@gmail.com"
                style="color: #E80385 !important; font-weight: 600; display: inline-block;">support@sensuallush.gmail.com</a>.
        </p>
    </div>
    <script>
        const updatBG = () => {
            const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.style.backgroundColor = darkMode ? '#fff' : '#000';
            document.body.style.color = darkMode ? '#000' : '#fff';
            document.body.style.borderBlockColor = darkMode ? '#000' : '#fff';
        }
        updatBG();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updatBG)
    </script>
</body>

</html>
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
