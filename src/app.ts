import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send("ok")
})

const port = 3000

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`)
})
