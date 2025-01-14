import { createProduct } from "../models/productModel.js";

export const createProductController = async (req, res) => {

    try {
        const {name, description, price, imageLink} = req.body;
        const result = await createProduct(name, description, price, imageLink);
        res.status(201).json({message: 'Producto creado exitosamente', result});

    } catch(error) {
        res.status(500).json({ message: 'Error al crear el producto: ' + error.message });
    }
};
