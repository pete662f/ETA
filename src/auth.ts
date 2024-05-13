import { SvelteKitAuth, type User } from "@auth/sveltekit";
import Credentials from "@auth/sveltekit/providers/credentials";
import { signInSchema, createUserSchema } from "$lib/zid";

import GitHub from "@auth/sveltekit/providers/github";
import Google from "@auth/sveltekit/providers/google";

import PostgresAdapter from "@auth/pg-adapter";

import { saltAndHashPassword } from "./password";
import { getUserFromDb, createUserInDb, pool, createOrganization, getOrganizationByName, getOrganizationById } from "./db";

// sign In
export const { signIn, signOut, handle } = SvelteKitAuth({ 
    //@ts-ignore
    adapter: PostgresAdapter(pool),

    providers: [
        GitHub,
        Google,
        /*Credentials({
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
        }),*/
    ],
    callbacks: {
        session({ session, user }) {
            // Initialize 'organization' as an object if it doesn't exist
            if (user.organization_uuid) {
                if (!session.user.organization) {
                    session.user.organization = {};
                }
                session.user.organization.id = user.organization_id;
                session.user.organization.name = "Test Organization";
            }

            return session;
        },
    },
});