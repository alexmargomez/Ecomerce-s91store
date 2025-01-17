import express from 'express';
import createProductController from '../controllers/createProductController.js';
import deleteProductController from '../controllers/deleteProductController.js';
import updateProductController from '../controllers/updateProductController.js';
import consultProductController from '../controllers/consultProductController.js';

const router = express.Router();

router.get('/product',(req, res) => {
    console.log("Se recibió una solicitud de consulta Productos");
    consultProductController(req, res);
});

router.post('/create', (req, res) => {
    console.log("Se recibió una solicitud de creación");
    createProductController(req, res);
});

router.delete('/delete/:id', (req, res) =>{
    console.log(`Se recibio la solicitud de eliminar el ID ${req.params.id}`);
    deleteProductController(req, res);
});

router.put('/update/:id', (req, res) =>{
    console.log(`Se recibio la solicitud para modificar el ID ${req.params.id}`);
    updateProductController(req, res);
});

export default router;