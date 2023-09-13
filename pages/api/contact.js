import nodemailer from "nodemailer";

export default async function ContactForm(req, res) {
  if (req.method === "POST") {
    const { name, email, telephone, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.web.de", // SMTP server for web.de
      port: 587, // Port for sending emails
      secure: false, // Set to true if your SMTP server uses SSL/TLS
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configure email data
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME, // Destination email address
      subject: "Contact Inquiry",
      text: `Name: ${name}\nEmail: ${email}\nTelephone: ${telephone}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
