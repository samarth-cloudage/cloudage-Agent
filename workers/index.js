import { Resend } from "resend";

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("CloudAge Contact API is running 🚀");
    }

    try {
      const { name, email, phone, interest, message } = await request.json();

      const resend = new Resend(env.RESEND_API_KEY);

      const { error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "samarthkapadia1@gmail.com",
        subject: `📩 New Website Inquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Interest:</strong> ${interest}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `,
      });

      if (error) {
        return Response.json(error, { status: 500 });
      }

      return Response.json({
        success: true,
        message: "Email sent successfully",
      });
    } catch (err) {
      return Response.json(
        {
          success: false,
          error: err.message,
        },
        { status: 500 },
      );
    }
  },
};
