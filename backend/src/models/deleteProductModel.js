import pool from "../config/db.js";

const deleteProductModel = async(id) => {

    const check = 'SELECT * FROM Productos WHERE id = ?'
    const[rows] = await pool.execute(check, [id]);
    
    if (rows.length === 0) {
        return 0;
    } else {
        const query = 'DELETE FROM Productos WHERE id = ?';
        const [result] = await pool.execute(query, [id])
        return result; 
    }

};

export default deleteProductModel;