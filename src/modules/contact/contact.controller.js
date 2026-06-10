// contact.controller.js
const contactService = require('./contact.service');

const submitContactForm = async (req, res) => {

    console.log("BODY =", req.body);

    try {

        await contactService.sendContactMail(req.body);

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully'
        });

    } catch (error) {

    console.error("========== ERROR ==========");
    console.error(error);
    console.error("===========================");

    return res.status(500).json({
        success: false,
        message: error.message
    });
}
};

module.exports = {
    submitContactForm
};