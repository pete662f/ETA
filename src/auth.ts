import { SvelteKitAuth, type User } from "@auth/sveltekit";
import { ZodError, string } from "zod";
import Credentials from "@auth/sveltekit/providers/credentials";
import { signInSchema, createUserSchema } from "$lib/zid";

import { saltAndHashPassword } from "./password";
import { getUserFromDb, createUserInDb } from "./db";

// sign In
export const { signIn, signOut, handle } = SvelteKitAuth({ 
    providers: [
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


// Create user
export const createUser = SvelteKitAuth({
    providers: [
        Credentials({
            credentials: {
                email : {},
                password: {},
                passwordConfirmation: {},
            },

            authorize: async (credentials) => {
                const { email, password, passwordConfirmation } = await createUserSchema.parseAsync(credentials);

                // Salt and hash password
                const pwHash = saltAndHashPassword(credentials.password as string);

                // Check if user exists
                const user = await getUserFromDb(credentials.email as string, pwHash);

                if (user) {
                    throw new Error("User already exists");
                }

                // Create user in database
                await createUserInDb(credentials.email as string, pwHash);

                // Return user as an json object
                return user;
            },
        }),
    ],
});