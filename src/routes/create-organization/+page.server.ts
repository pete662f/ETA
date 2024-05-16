import { createOrganization, getOrganizationByName, linkUserToOrganization } from '../../db';
import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
 
export const load: PageServerLoad = (async ( handle ) => {
    const session = await handle.locals.auth();
    
    if (!session || session.user?.organizationId) {
        throw redirect(303,'/');
    }

    return {session};
}) satisfies PageServerLoad;

export const actions: Actions = {
    // Create organization action
    createOrganization: async ( { request, locals } ) => {

        // Check if user is logged in (shoud be done in the load function, but just in case and typescript is complaining about it)
        const session = await locals.auth();
        if (!session?.user) {
            throw redirect(303,'/');
        }

        const data = await request.formData();
        const name = data.get('name');

        // Check if organization already exists
        if (await getOrganizationByName(name as string)) {
            return { error: "Organization already exists" };
        }
        
        await createOrganization(name as string);

        const result = await getOrganizationByName(name as string)

        await linkUserToOrganization(session.user.id as string, result.id as string);

        throw redirect(303,'/dashboard');
    }
}