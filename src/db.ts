// Peter
import pkg from 'pg';
import { get } from 'svelte/store';
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


// Organization functions
export const createOrganization = async (name: string) => {
    const result = await pool.query('INSERT INTO organizations (name) VALUES ($1)', [name]);
    return result.rows[0];
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
    const result = await pool.query('UPDATE users SET "organizationId" = $1 WHERE id = $2', [organizationId, userId]);
}

// Event functions
export const createEvent = async (name: string, location: string, availableTickets: number, date: string, organizationId: string) => {
    const result = await pool.query('INSERT INTO events (name, location, "availableTickets", date, "organizationId") VALUES ($1, $2, $3, $4, $5)', [name, location, availableTickets, date, organizationId]);
    return result.rows[0];
}

export const getEventById = async (id: string) => {
    const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
    return result.rows[0];
}

export const getEventNameInOrganization = async (name: string, organizationId: string) => {
    const result = await pool.query('SELECT * FROM events WHERE name = $1 AND "organizationId" = $2', [name, organizationId]);
    return result.rows[0];
}

export const getEventsInOrganization = async (organizationId: string) => {
    const result = await pool.query('SELECT * FROM events WHERE "organizationId" = $1', [organizationId]);
    return result.rows;
}

// Ticket functions
export const createTicket = async (type: string, eventId: string, userId: string) => {
    const result = await pool.query('INSERT INTO tickets (type, "eventId", "userId") VALUES ($1, $2, $3)', [type, eventId, userId]);
    return result.rows[0];
}

export const getTicketFromEvent = async (eventId: string) => {
    const result = await pool.query('SELECT * FROM tickets WHERE "eventId" = $1', [eventId]);
    return result.rows;
}

// This is dummy functions

export const getUserFromDb = async (email: string, pwHash: string) => {
    return { email, pwHash };
}

export const createUserInDb = async (email: string, pwHash: string) => {
    return { email, pwHash };
}