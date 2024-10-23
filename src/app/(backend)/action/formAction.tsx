"use server";
import nodemailer from "nodemailer";


export async function sendEmails(formData: FormData) {

    try {
        const email = formData.get("email") as string;
        const date = formData.get("date") as string;
        const phone = formData.get("phone");
        const activeButton = formData.get("activeButton");
        const wordCount = formData.get("wordCount")   // Ensure it's a number
        const selectedService = formData.get("selectedService");
        const selectedSubject = formData.get("selectedSubject");
        const selectedQuestions = formData.get("selectedQuestions");

        // Transporter configuration
        const transporter = nodemailer.createTransport({
          host: process.env.HOST as string,
          port: process.env.PORTS as unknown as number,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.USER, // your SMTP username
            pass: process.env.PASSWORD, // your SMTP password
          },
        });

        // Email options for the client
        const clientMailOptions = {
            from: `${process.env.MAILFROM}`,
            to: email,
            subject: 'Your Service Form Submission Confirmation',
            html: `
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;  color: black;">
    <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #f4eefd; padding: 20px;">
    
       <div style="text-align: center;">
        <p style="font-size: 24px;  font-weight: 700;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; ">Taking My Classes Online</p>
       </div>
    
      <p style="font-size: 20px;  line-height: 1.5; text-align: center; font-weight: 600;">We Have Recieved Your Order! <br></p>
   

    <div style="text-align: start;">
        <h2 style="font-size: 26px; font-weight: 600;">Order Summary</h2>
      </div>

      <div style="width:100%; height: 3px; background-color: #7d0bff; margin-bottom: 20px;"></div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left; font-weight: 600;">Email:</div>
          <div style="float: right;">${email}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left; font-weight: 600;">Deadline:</div>
          <div style="float: right;">${date}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left; font-weight: 600;">Phone:</div>
          <div style="float: right;">${phone}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left; font-weight: 600;">Purpose:</div>
          <div style="float: right;">${activeButton}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left; font-weight: 600; ">Word Count:</div>
          <div style="float: right;">${wordCount}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left; font-weight: 600;">Service:</div>
          <div style="float: right;">${selectedService}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left; font-weight: 600;">Subject:</div>
          <div style="float: right;">${selectedSubject}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left; font-weight: 600;">Questions:</div>
          <div style="float: right;">${selectedQuestions}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    

      <div style="padding: 10px 0; text-align: center;">
        <div style="margin: 10px 0;">
        <p style="font-size: x-large;  text-align: center; font-weight: 500;">Use this Discount Code To Get Started  </p>
        <a href="https://scholarhelp.vercel.app/Order?coupon=off45">
          <img style="border-radius: 10px;"  height="100" src="https://muhammadumer.sirv.com/coupon-2.png"  alt="">
        </a>
        </div>
        </div>
    
     
    
    
      <div style="text-align: center;">
        <p style="font-size: x-large;  font-weight: 500;">You Can Contact Our Support Team 24/7.</p>
        <a href="https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?" style="display: inline-block; padding: 15px 30px; background-color: #2ea710;  text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px; margin: 10px 0; text-align: center; color: whitesmoke;">
          Whatsapp Now
        </a>
      </div>
    
      <div style="text-align: center; padding-top: 10px; font-size: 12px; ">
        <p>Taking My Classes Online is a registered trademark of Taking My Classes Online, Inc. All rights reserved.</p>
      </div>
    </div>
    </body>
            `
        };

        // Send the client email
        await transporter.sendMail(clientMailOptions);
        console.log('Client confirmation email sent successfully');

        // Email options for the support team
        const supportMailOptions = {
            from: `${process.env.MAILFROM}`,
            to: `${process.env.MAILTO}`,
            subject: 'New Service Form Submission',
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <p><b>New Submission Details:</b></p>
                <ul>
                    <li><b>Email:</b> ${email}</li>
                    <li><b>Deadline:</b> ${date}</li>
                    <li><b>Phone Number:</b> ${phone}</li>
                    <li><b>Purpose:</b> ${activeButton}</li>
                    <li><b>Word Count:</b> ${wordCount}</li>
                    <li><b>Selected Service:</b> ${selectedService}</li>
                    <li><b>Selected Subject:</b> ${selectedSubject}</li>
                    <li><b>Selected Questions:</b> ${selectedQuestions}</li>
                </ul>
                <p>Please take the necessary actions.</p>
            </div>
            `
        };

        // Send the support email
        await transporter.sendMail(supportMailOptions);
        console.log('Support notification email sent successfully');

        return { success: "Confirmation and notification emails sent successfully." };
        
    } catch (error) {
        console.error('Error sending emails:', error);
        return { error: "Failed to send emails." };
    }
}