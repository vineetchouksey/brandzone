var nodemailer = require('nodemailer');


exports.sendEmail = function (recipient, message) {
    var subject = "";
    var text = "";
    subject = message.subject;
    text = message.text;

    var msg = {
        transport: nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            secure: false,
            port: 465,
            //port: 25,
            auth: {
                user: "dev.net.asp@gmail.com",
                pass: "Wel@come123"
            }
            ,
            tls: {
                rejectUnauthorized: false
            }
        }),
        html: text,
        from: "dev.net.asp@gmail.com",
        subject: subject,
        to: recipient
    };
    msg.transport.sendMail(msg, function (err) {
        if (err) {
            console.log('Sending to ' + msg.to + ' failed: ' + err);
        }
        msg.transport.close();
    });
}