const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'priyankareddy0906@gmail.com',
        subject: 'Welcome to task application',
        text: `welcome to the app, ${name}. let me know how you get along with the app`
    })
}
const sendCancellationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'priyankareddy0906@gmail.com',
        subject: 'Cancellation email',
        text: `Hie, ${name}!! You have cancelled your account`
    })

}

module.exports = {
    sendWelcomeEmail ,
    sendCancellationEmail
}
