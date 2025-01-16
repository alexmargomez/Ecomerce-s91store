import pool from "../config/db.js";


const updateProductModel = async (id, name, description, price, imageLink) => {
    const query = `
        UPDATE Productos 
        SET name = ?, description = ?, price = ?, imagen_link = ? 
        WHERE id = ?
    `;

    const [result] = await pool.execute(query, [name, description, price, imageLink, id])
    return result;

}

export default updateProductModel