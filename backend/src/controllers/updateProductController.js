import updateProduct from '../models/updateProductModel.js'

const updateProductController = async(req, res) => {
    const {id}= req.params;
    const {name, description, price, imageLink} = req.body;

    const result = await updateProduct(id, name, description, price, imageLink);
    
    res.status(201).json({
        message: 'Producto editado exitosamente',
        id : result,
        name,
        description,
        price,
        imageLink 
    });

}

export default updateProductController;