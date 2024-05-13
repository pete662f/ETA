import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ( event ) => {
    const session = await event.locals.auth();

    // If there is no session, redirect to the home page
    if (!session) {
        redirect(303,'/');
    }
 
    // If not in organization, redirect to create organization page
    if (!session.user?.organization) {
        redirect(303,'/create-organization');
    }

    return {
        session,
    }
};