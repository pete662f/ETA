import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ( event ) => {
    const session = await event.locals.auth();
    if (session) {
        redirect(303,"/"+session.user?.name);
    }
    return {}
}) satisfies PageServerLoad;