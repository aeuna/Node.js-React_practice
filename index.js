const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
mongoose.connect('mongodb+srv://euna:abcd1234@reactpractice-ptwwq.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true , useCreateIndex :true, useFindAndModify: false
}).then(() => console.log('MongoDB connect.....'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))