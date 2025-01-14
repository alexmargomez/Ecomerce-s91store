import express from 'express';
import createProductController from '../controllers/productController.js';

const router = express.Router();

router.get('/',(req, res) => {
    res.send("funcionando");
});

router.post('/a', (req, res) => {
    console.log("Se recibió una solicitud POST en /a");
    createProductController(req, res);
});

export default router;