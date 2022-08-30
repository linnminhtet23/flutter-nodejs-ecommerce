const express = require("express");
const mongoose = require("mongoose");
const authRouter= require("./routes/auth");
const morgan = require('morgan')

const PORT = process.env.PORT || 3000;
const app = express();


const DB ="mongodb://127.0.0.1:27017/eshop";

app.use(express.json());
app.use(morgan("tiny"));

app.use(authRouter);

// app.get('/',(req,res)=>{
//     res.send("<h3>hello</h3>")
// });

//connection
mongoose.connect(DB).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
