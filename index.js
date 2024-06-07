require('dotenv').config()
const express = require('express')
const app = express() // app express ni banla ahe
const port = 8000

app.get('/', (req, res) => {
   res.send('Hello World!')  // home page vr display karyla use hote te  req.send()
})


app.get('/twitter', (req, res) =>{
     res.send("mukuldeshpande@twitter");
} )

app.get('/login', (req, res)=>{
    res.send('<h1>please log in at chai or code</h1>')

})

app.get('/youtube', (req, res)=>{
    res.send('<h2>chai or code</h2>')

})

// you need to go the apllication to a production leval you need ti install env

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})