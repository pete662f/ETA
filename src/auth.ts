import { SvelteKitAuth, type User } from "@auth/sveltekit";
import Credentials from "@auth/sveltekit/providers/credentials";
import { signInSchema, createUserSchema } from "$lib/zid";

import GitHub from "@auth/sveltekit/providers/github";
import Google from "@auth/sveltekit/providers/google";

import PostgresAdapter from "@auth/pg-adapter";
import pkg from 'pg';
const {Pool} = pkg;

import { saltAndHashPassword } from "./password";
import { getUserFromDb, createUserInDb } from "./db";

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});     

// sign In
export const { signIn, signOut, handle } = SvelteKitAuth({ 
    //@ts-ignore
    adapter: PostgresAdapter(pool),

    providers: [
        GitHub,
        Google,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

            authorize: async (credentials) => {
                let user = null;

                const { email, password } = await signInSchema.parseAsync(credentials)


                // Salt and hash password
                const pwHash: string = saltAndHashPassword(credentials.password as string);

                // Check if user exists
                user = await getUserFromDb(credentials.email as string, pwHash);

                if (!user) {
                    throw new Error("Invalid credentials");
                }

                // Return user as an json object
                return user;
            },
        }),
    ],
});