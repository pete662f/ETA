// Peter
// Nedded by authjs for server-side using Form Actions
import { signIn } from "../../auth"
import type { Actions } from "./$types"
export const actions: Actions = { default: signIn }