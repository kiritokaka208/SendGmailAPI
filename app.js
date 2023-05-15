const express = require("express");
const app = express();

const nodemailer = require("nodemailer"); // npm this

app.get("/api/gmail", (req, res) => {
  const gmail = req.query.gmail;

  res.send(`${gmail}`);

  if (!gmail) {
    res.status(400).json({ error: "gmail is not authentication" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "_____@gmail.com", //your gmail  //ABC6868222@gmail.com
      pass: "___pass", //Enter the password of the gmail you want to send here
    },
  });

  // Define the email options
  const mailOptions = {
    //ABC6868222@gmail.com

    from: "___@gmail.com",
    to: `${'"' + gmail + '"'}`,
    subject: "...",
    html: "<p>...</p>",
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
});

app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
