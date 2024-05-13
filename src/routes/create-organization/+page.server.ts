import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ( handle ) => {
    const session = await handle.locals.auth();
    
    if (!session || session.user?.organization) {
        redirect(303,'/');
    }

    return {session};
}) satisfies PageServerLoad;