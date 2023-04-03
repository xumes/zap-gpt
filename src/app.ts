import express from "express"
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import cors from 'cors'
import { sendWhatsappMessage } from "./services/twilio"

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

dotenv.config()

app.post('/chat/send', async (req, res) => {
    const {to, body} = req.body
    try {
        const result = await sendWhatsappMessage(`whatsapp:${to}`, body) 
        console.log(result)
        res.status(200).json({success: true, body})
    }catch (error) {
        res.status(500).json({success: false, error})
    }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`)
})
