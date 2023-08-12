const express = require('express');

const mongoose = require('mongoose');
const url = "mongodb+srv://lontebangsat062:agus12345@cluster0.aalujvg.mongodb.net/mernapp"
const app = express();
const cors = require("cors")
const port = 5000;

app.use(cors())
mongoose.connect(url,{})
.then(result => console.log("database is connected"))
.catch(err => console.log(err))

const studentScheme = new mongoose.Schema({
    name:String,
    age:Number,
   

})

const agusapp = mongoose.model('agusapp',studentScheme)
app.get('/student',async (req,res)=>{
    // Fetch all students from the "students" collection
    try{
        const student = await agusapp.find()
        
       res.json(student)
      
            //  res.write() must be end the procces with the method res.end()
        // res.send(studendDetails)


    } catch(err){
         res.status(500).json({ error: "Internal server error" });
    }
    

})

app.get('/',(req,res)=>{
    res.send("hello from anjing")
})




app.listen(port, () => {
    console.log(`The server is listening : ${port}`);
});
