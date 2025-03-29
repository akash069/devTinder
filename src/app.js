const express = require('express');

const app = express();

//request handler
app.use("/user",(req,res,next) => {
   //Rout Handler
   //res.send("Rout Handler 2");
   next();
   //next is express fun that call the res fun  
},
(req,res,next)=>{
   //res.send("2nd Response!!");
   next();
},
(req,res,next)=>{
   res.send("3nd Response!!");
}
);

app.listen(3000, () =>{
 console.log("server is succesfully listening on port 3000..");   
});