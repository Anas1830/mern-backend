const express =  require("express");
const dotenv  = require('dotenv');
const bodyParser = require('body-parser')
const router = require('./routes/route')
const connectDB = require("./model/db")
const cors = require('cors')





const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
app.use(cors())


app.use(bodyParser.json())
app.use('/api',router)


app.listen(PORT,console.log(`server started on port ${PORT}`));

// app.get("/api/notes",(req,res) =>{
//     res.json(notes);
// });


// app.get('/', (req,res) => {
//    res.send("API is running");
// });

// app.get('/api/notes/:id',(req,res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     res.send(note);
// });


// app.post('/api/create-event', (req, res) => {
//     console.log(req.body)
//     res.send({"test": "test"})
// })