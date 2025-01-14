import pool from "../config/db.js";

export const createProduct = async(name, description, price, imageLink) => {
    const query = `
        INSERT INTO Productos (name, description, price, imagen_link) 
        VALUES(?,?,?,?)
    `;
    const [result] = await pool.execute(query, [name, description, price, imageLink]);
    return result;

};

export default createProduct;