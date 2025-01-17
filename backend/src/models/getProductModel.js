import pool from "../config/db.js"

const consultProduct = async () => {
    const query = "SELECT * FROM Productos"
    const [rows] = await pool.execute(query);
    return rows;
};

export default consultProduct;