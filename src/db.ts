
export const getUserFromDb = async (email: string, pwHash: string) => {
    return { email, pwHash };
}

export const createUserInDb = async (email: string, pwHash: string) => {
    return { email, pwHash };
}