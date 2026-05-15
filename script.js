const googlemodel = require('@google/genai').GoogleGenAI
const express = require('express')
const cors = require('cors')

app = express()
app.use(cors())
app.use(express.json())

const ai = new googlemodel({apiKey : "AIzaSyCngri6fz48Wjv3yPDC-fBA_jCiM0BSSWw"})
let chat_history = []




app.post('/query', async (req, res) => {

    const response = await ai.models.generateContent({
        model : "gemini-3-flash-preview",
        contents : req.body.query,
    })

        res.json({'reply' : response.text})
        
    })


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})