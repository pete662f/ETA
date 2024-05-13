import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ( event ) => {
    const session = await event.locals.auth();
    if (session) {
        throw redirect(303,"/dashboard");
    }
    return {}
}) satisfies PageServerLoad;