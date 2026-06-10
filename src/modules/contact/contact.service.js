const transporter = require('../../config/mail.config');

const sendContactMail = async (contactData) => {

    console.log("CONTACT DATA =", contactData);

    if (!contactData) {
        throw new Error('Contact data missing');
    }

    const {
        name,
        email,
        phone,
        message
    } = contactData;

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER,
        subject: `New Contact Request from ${name}`,
        html: `
            <h2>New Contact Form Submission</h2>

            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <hr>

            <p>${message}</p>
        `
    };

    console.log("MAIL OPTIONS =", mailOptions);

    const result = await transporter.sendMail(mailOptions);

    console.log("MAIL RESULT =", result);

    return result;
};

module.exports = {
    sendContactMail
};