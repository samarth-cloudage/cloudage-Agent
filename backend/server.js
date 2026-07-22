import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Home Route
app.get("/", (req, res) => {
  res.send("CloudAge Backend Running 🚀");
});

// Test Email Route
app.get("/send-test", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"CloudAge Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "✅ Nodemailer Test",
      html: `
        <h2>Congratulations 🎉</h2>
        <p>Your Node.js backend is successfully sending emails.</p>
        <p>The next step is connecting your React contact form.</p>
      `,
    });

    res.send("✅ Test email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Contact Form Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    await transporter.sendMail({
      from: `"CloudAge Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Website Inquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2>📩 New Contact Form Submission</h2>

          <table cellpadding="10" cellspacing="0" style="border-collapse:collapse;width:100%;border:1px solid #ddd;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone || "Not Provided"}</td>
            </tr>

            <tr>
              <td><strong>Interested In</strong></td>
              <td>${interest}</td>
            </tr>

            <tr>
              <td><strong>Project Details</strong></td>
              <td>${message}</td>
            </tr>
          </table>

          <br>

          <p>This message was sent from the CloudAge Informatica website.</p>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
