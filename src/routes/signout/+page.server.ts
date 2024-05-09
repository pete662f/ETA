// Nedded by authjs for server-side using Form Actions
import { signOut } from "../../auth"
import type { Actions } from "./$types"
export const actions: Actions = { default: signOut }