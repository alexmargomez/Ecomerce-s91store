import express from 'express';
import dotenv from 'dotenv';

const app= express();

dotenv.config();
console.log(process.env.PORT);
app.get('/',(req, res) => {
    res.send("funcionando");
});

const port= process.env.PORT || 5000;
app.listen( `${port}` , () =>{
    console.log(`listenig on port`);
});