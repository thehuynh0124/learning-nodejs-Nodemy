const express = require('express')
const dotenv = require('dotenv')
const app = express()
const bodyParser = require('body-parser')
const routerUser = require('./routes/user.router')
const path = require('path')

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res){
    var duongDanFile = path.join(__dirname, 'home.html')
    res.sendFile(duongDanFile)
})



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/api/user', routerUser)



//require database
const connectDB = require('./config/db.config')
dotenv.config()
connectDB()

//config port
const PORT = process.env.PORT || 3080
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))