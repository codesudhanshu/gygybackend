const express =require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotev = require('dotenv')
dotev.config()
const port = process.env.PORT
const url = process.env.MONGODB_URL

const app = express()
app.use(cors({
    origin: '*',
    method: ['GET','POST','PUT','PATCH','DELETE'],
    Credential:true
}
))
app.use(express.json())

const UserSubmit = require('./routers/UserSubmit')

app.use('/api',UserSubmit)

mongoose.connect(url)
.then(()=>{console.log('mongodb has been connected')})
.catch(()=>{console.log('mongodb gives some error')})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})