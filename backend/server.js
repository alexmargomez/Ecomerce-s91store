import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './src/routes/productRoutes.js';

const app= express();
dotenv.config();

app.use(express.json);

app.use('/api/products', productRoutes);

app.get('/',(req, res) => {
    res.send("funcionando");
});

const port= process.env.PORT || 5000;
app.listen( `${port}` , () =>{
    console.log(`listenig on port ${port}`);
});

process.on('SIGINT', () => {
    console.log('Recibida señal SIGINT. Cerrando servidor...');
    process.exit(0);
});