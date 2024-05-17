// Peter
import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { getEventNameInOrganization, createEvent } from '../../../db';

export const actions: Actions = {
    default: async ( { request, locals } ) => {
        // Check if user is logged in (shoud be done in the load function, but just in case and typescript is complaining about it)
        const session = await locals.auth();
        if (!session?.user) {
            throw redirect(303,'/');
        }

        // Get form data
        const data = await request.formData();
        const name = data.get('name');
        const location = data.get('location');
        const availableTickets = data.get('availableTickets');
        const date = data.get('date');

        // Parse availableTickets to number
        const availableTicketsNumber = parseInt(availableTickets as string);

        // Check if event already exists
        if (await getEventNameInOrganization(name as string, session.user.organizationId as string)) {
            return { error: "Event already exists" };
        }

        // Create event
        await createEvent(name as string, location as string, availableTicketsNumber as number, date as string, session.user.organizationId as string);

        throw redirect(303,'/dashboard/events');
    }
}