import { createTransport } from 'nodemailer'

const user = import.meta.env.VITE_GMAIL_USERNAME
const pass = import.meta.env.VITE_GMAIL_PASSWORD

const transporter = createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: { user, pass },
})

transporter.sendMail({
  from: user,
  to: '',
  html: ``
})