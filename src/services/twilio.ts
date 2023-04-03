import twilio from 'twilio'
import dotenv from "dotenv"

dotenv.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const whatsappPhoneNumber = process.env.WHATSAPP_PHONE_NUMBER

const client = twilio(accountSid, authToken)

export const sendWhatsappMessage = async (to: string, body: string): Promise<void> => {
    try {
        await client.messages.create({
            to,
            from: whatsappPhoneNumber,
            body
        })
    } catch (error) {
        console.error(`Error sending message to ${to}: ${error}`)
    }
}