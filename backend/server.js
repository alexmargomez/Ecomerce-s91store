import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/productRoutes.js';

const app= express();
dotenv.config();

app.use(express.json());
app.use('/',router);

const port= process.env.PORT || 5000;
app.listen( `${port}` , () =>{
    console.log(`listenig on port ${port}`);
});
