import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/productRoutes.js';
import cors from 'cors';

const app= express();
dotenv.config();
app.use('/uploads', express.static('./src/uploads'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Permite el frontend
}));
app.use('/',router);

const port= process.env.PORT || 5000;
app.listen( `${port}` , () =>{
    console.log(`listenig on port ${port}`);
});
