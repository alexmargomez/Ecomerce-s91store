import express from 'express';
import createProductController from '../controllers/createProductController.js';
import deleteProductController from '../controllers/deleteProductController.js';
import updateProductController from '../controllers/updateProductController.js';

const router = express.Router();

router.get('/',(req, res) => {
    console.log(req.body);
    res.send("funcionando");
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