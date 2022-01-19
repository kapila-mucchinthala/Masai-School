const express = require('express');
const sendMail = require('../utils/sendmail');
const adminMail = require('../utils/sendmail');
const transporter = require('../configs/mail');

const router = express.Router();
const User = require('../models/user.model');

router.post("", async function (req, res) {
    const user = await User.create(req.body);
    sendMail({
        
        from: `ABC@systems.com`,
        to: `${user.email}`,
        subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`,
        text: `Hi ${user.first_name}, Please Confirm your emai address --------- ${user.email}`,
        html: "<p>Hi,Please Confirm your emai address --------- </p>"
    })
    adminMail({
        
        from:`ABC@systems.com`,
        to: "admin1@mail.com, admin2@mail.com, admin3@mail.com, admin4@mail.com, admin5@mail.com",
        subject: `${user.first_name} ${user.last_name} has registered with us`,
        text: `Please welcome ${user.first_name} ${user.last_name}`,
        html: "<p>Please welcome</p>"
     })
    return res.send(user);
})
router.get("", async function (req, res) {
    const user = await User.find();
    return res.send(user);
})

module.exports = router;
