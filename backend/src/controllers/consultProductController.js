import getProduct from "../models/getProductModel.js"

const consultProductController = async (req, res) => {
    const allProduct = await getProduct();
    res.status(200).json({
        total: allProduct.length,
        products: allProduct,
    });
};

export default consultProductController;
