const express = require('express');
const cors = require('cors')
const bodyparser = require('body-parser');
const app = express()
const usersRouter = require('./routes/users.route')

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());

app.use(usersRouter)

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.use((req, res, next)=>{
    res.status(404).json({
        message: "404 route not found"
    })
})
//server error
// app.use((err, req, res, next)=>{
//     res.status(500).json({
//         message: "something broke"
//     })
// })

module.exports = app;
