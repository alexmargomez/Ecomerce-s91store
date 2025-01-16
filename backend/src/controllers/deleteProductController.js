import deleteProduct from '../models/deleteProductModel.js'

const deleteProductController = async(req, res) => {
  try {
    const { id } =  req.params;

    if(!id){
      return res.status(400).json({message: 'El ID es obligatorio'});
    }

    const re_status = await deleteProduct(id);
    
    if (re_status === 0){
      return res.status(404).json({ message: 'Producto no encontrado'});
    }else{
      res.status(200).json({message: `Producto con ID ${id} eliminado`});
    }

  } catch (error) {
    console.error('Error al eliminar el producto', error);
    res.status(500).json({message: 'Error al eliminar el producto', error});
  }
}

export default deleteProductController