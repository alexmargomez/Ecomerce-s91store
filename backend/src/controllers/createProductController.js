import createProduct from "../models/createProductModel.js";
import uploadImage from "../services/Uploadservice.js";

const createProductController = async (req, res) => {

    uploadImage(req, res, async () =>{
        try {

            if (!req.file) {
                return res.status(400).json({ message: 'Se requiere una imagen para el producto' });
            }

            const {name, description, price} = req.body;
            const imageLink = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        

            const NewProduct = await createProduct(name, description, price, imageLink);
            res.status(201).json({
                message: 'Producto creado exitosamente',
                id : NewProduct,
                name,
                description,
                price,
                imageLink 
            });
    
        } catch(error) {
            res.status(500).json({ message: 'Error al crear el producto: ' + error.message });
        }
    });
    
};

export default createProductController;