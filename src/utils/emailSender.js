const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID ='167223604745-jt6ngegsurf1bf8s81mq5ulvcsflv9ta.apps.googleusercontent.com'
const CLIENT_SECRET ='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'
const REDIRECT_URI ='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN ='1//04kqZjbY5jSXqCgYIARAAGAQSNwF-L9Irh3nuSIre5a_4ETMUS_mpMrlmRyv3VmBx16pwqr2A8zvjBKoaGxgSL8KBAm06LIjKE5s'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN})

export async function sendMail(email,token) {
    try {
        const accessToken = await oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user:'singhchinkikumari@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOption = {
            from: 'CHINKISINGH <singhchinkikumari@gmail.com>',
            to: email,
            subject: "Hello from gmail using API",
            Text: 'Hello from gmail API',
            html: `<h1>Hello,<br><br>Click on given link to reset your password!</h1><br><h1>Link:><a href="http://localhost:3000/${token}">click here</a></h1>`
        };
        const result = await transport.sendMail(mailOption)
        //return result
        return token;
    }catch (error) {
        return error
    }
}


  
  // sendMail()
    //.then((result) => console.log('Email sent...', result))
    //.catch((error) => console.log(error.message));  
