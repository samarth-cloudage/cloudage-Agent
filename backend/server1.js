import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
	origin: [
		"http://localhost:5173",
		"https://cloudageinformatica.com",
		"https://www.cloudageinformatica.com"
	],
	methods: ["GET", "POST", "OPTIONS"],
	allowedHeaders: ["Content-Type"]
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const transporter = nodemailer.createTransport({
// 	host: "mail.cloudageinformatica.com",
// 	port: 465,
// 	secure: true,
// });

const transporter = nodemailer.createTransport({
	sendmail: true,
	newline: "unix",
	path: "/usr/sbin/sendmail"
});


app.get("/", (req, res) => {
	res.send("Backend Running 🚀");
});

app.post("/api/contact", async (req, res) => {
	try {
		const { first_name, email_address, contact_subject, phone, message } = req.body;

		const recipient = "contact@cloudageinformatica.com";

		const emailContent = `
Name: ${first_name}
Email: ${email_address}
Phone: ${phone || "Not Provided"}

Message:
${message}
`;

		await transporter.sendMail({
			from: `"${first_name}" <${email_address}>`,
			to: recipient,
			subject: contact_subject,
			text: emailContent,
			replyTo: email_address,
		});

		res.json({
			success: true,
			message: "Email sent successfully.",
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({
			success: false,
			message: err.message,
			trace: err.stack
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
