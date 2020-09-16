# Node Mailer Example

Make sure to `npm install` before running!

First, you will need to create an `.env` file in the root of the project. This should have your username and password creds for the gmail account you wish to send from. Additionally, to test this, you will need to update the `server/app.js` to include the Email account you wish to send an email from.
Note that this setup is for Gmail. Which has many additional considerations. As always, I recommend a `SMTP` server over this solution.

* Make sure to check out https://nodemailer.com/about/
* Follow the links on https://nodemailer.com/usage/using-gmail/ , this link gives you a couple steps you need to take to ensure that your Gmail account is ready for node mailer.

