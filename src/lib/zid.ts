import { object, string } from "zod";

export const signInSchema = object({
    // Validate email
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email address"),
    // Validate password
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
});

export const createUserSchema = object({
    // Validate email
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email address"),
    // Validate password
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
    // Validate password confirmation
    passwordConfirmation: string({ required_error: "Password confirmation is required" })
        .min(1, "Password confirmation is required")
        .min(8, "Password confirmation must be at least 8 characters")
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Password and password confirmation must match",
        path: ["passwordConfirmation"], // This shows where the error will be associated
});
    