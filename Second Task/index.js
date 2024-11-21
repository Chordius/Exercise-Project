const express = require('express')
const mongoose = require('mongoose');
const userRoute = require("./routes/user.route.js")
const threadRoute = require("./routes/thread.route.js")
const app = express()
const cors = require('cors')

// middleware config
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

var openingLine = "Welcome to DinoForums! A forum for fossil enthusiasts (not dinos)"

// routes
app.use('', userRoute);
app.use('/forums/', threadRoute);

app.get('/', (req, res) => {
    res.send(openingLine);
});

app.get('/checkSchema', (req, res) => {
    forumSchema.author instanceof ObjectId; // true
    forumSchema.author._id;
})

mongoose.connect('mongodb+srv://chordUser:ypGHnG2lL2TH26so@cluster0.4fyqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => { 
    console.log('Connected!') 
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
});
