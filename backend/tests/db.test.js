import pool from '../src/config/db.js';

describe('Prueba de conexion real DB', () => {
    it('Deberia conectar correctamente a la DB', async () => {
        try {
            const connection = await pool.getConnection();
            expect(connection).toBeDefined();
            connection.release();
        } catch (error) {
            throw new Error('Fallo la conexion a la DB');
        }
    });
});