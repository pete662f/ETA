import pkg from 'pg';
const {Pool} = pkg;

export const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});     

export const createOrganization = async (name: string) => {
    const result = pool.query('INSERT INTO organizations (name) VALUES ($1)', [name]);
}

export const getOrganizationById = async (id: string) => {
    const result = await pool.query('SELECT * FROM organizations WHERE id = $1', [id]);
    return result.rows[0];
}

export const getOrganizationByName = async (name: string) => {
    const result = await pool.query('SELECT * FROM organizations WHERE name = $1', [name]);
    return result.rows[0];
}

export const linkUserToOrganization = async (userId: string, organizationId: string) => {
    const result = await pool.query('UPDATE users SET organization_id = $1 WHERE id = $2', [organizationId, userId]);
}

// This is dummy functions

export const getUserFromDb = async (email: string, pwHash: string) => {
    return { email, pwHash };
}

export const createUserInDb = async (email: string, pwHash: string) => {
    return { email, pwHash };
}