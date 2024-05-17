// Peter
import type { PageServerLoad, Actions } from './$types';
import { getEventsInOrganization, getTicketFromEvent } from '../../../db';
import { redirect } from '@sveltejs/kit';

export const load = (async ( event ) => {
    const session = await event.locals.auth();

    // Should not be necessary, but just in case
    if (!session?.user?.organizationId) {
        throw redirect(303,'/create-organization');
    }

    const events = await getEventsInOrganization(session.user.organizationId as string);

    return {events};
}) satisfies PageServerLoad;

export const actions: Actions = {
    event: async ( { request, params, locals } ) => {
        console.log("pp");
    }
};