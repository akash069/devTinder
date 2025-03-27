const express = require('express');

const app = express();

//request handler
app.use("/test",(req,res) => {
   res.send("Hello from kc");  
});

app.listen(3000, () =>{
 console.log("server is succesfully listening on port 3000..");   
});