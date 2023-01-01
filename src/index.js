const express = require('express')
const { default: mongoose } = require('mongoose')
const route = require('./routes/route')
const app = express()

app.use(express.json())


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://anurag:jhansi112233@my-cluster.cummqwt.mongodb.net/runo-assignment", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err));

app.use('/', route)

app.listen(process.env.PORT || 3000, function (){
    console.log("Express App running on port "+(process.env.PORT || 3000))
})