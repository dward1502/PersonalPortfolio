// require('dotenv').config();
const nodemailer = require('nodemailer')
const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;

export default function handler(req, res) {

  



  res.status(200).json({ name: 'John Doe' })
}
