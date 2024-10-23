"use server";
import nodemailer from "nodemailer";

export default async function EmailAction2(state: any, formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Simple email validation
    if (!email || typeof email !== 'string' || !email.includes("@")) {
      return { error: "Invalid email address" };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.HOST as string,
      port: process.env.PORTS as unknown as number,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER, // your SMTP username
        pass: process.env.PASSWORD, // your SMTP password
      },
    });

    let mailOptions = {
      from: `Taking My Classes Online® Alert - <${process.env.MAILFROM}>`,
      to: email,
      subject: `New Email Form Entry | ${process.env.NEXT_PUBLIC_NAME}`,
      html: `
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #333; color: white;">
          <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #222222; padding: 20px;">
            <div style="text-align: center;">
              <p style="font-size: x-large; color: whitesmoke; font-weight: 700;">Taking My Classes Online</p>
            </div>
            <div style="text-align: center; padding-bottom: 10px;">
              <img src="https://muhammadumer.sirv.com/banner-temp.png" width="300" height="300" alt="Feature Image" style="max-width: 100%; height: auto;" />
            </div>
            <p style="font-size: 22px; color: white; line-height: 1.5; text-align: center;">
              We Have Received Your Message, ${name}!
              <br><br>
              <strong>Subject:</strong> ${subject} <br>
              <strong>Email:</strong> ${email} <br>
              <strong>Message:</strong> ${message}
            </p>
            <div style="padding: 10px 0; text-align: center;">
              <p style="font-size: x-large; color: whitesmoke; font-weight: 500;">You Can Contact Our Support Team 24/7</p>
              <a href="https://wa.me/3197005034911" style="display: inline-block; padding: 15px 30px; background-color: #2ea710; color: whitesmoke; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px; margin: 10px 0;">
                Whatsapp Now
              </a>
            </div>
            <div style="text-align: center; padding-top: 10px; font-size: 12px; color: white;">
              <p>Taking My Classes Online is a registered trademark of Taking My Classes Online, Inc. All rights reserved.</p>
            </div>
          </div>
        </body>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { success: "Form Submitted Successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send email" };
  }
}