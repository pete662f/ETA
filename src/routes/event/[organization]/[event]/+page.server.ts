import type { PageServerLoad, Actions } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { getOrganizationByName, getEventNameInOrganization, createTicket } from "../../../../db";

export const load: PageServerLoad = (async ( handle ) => {

    const {organization, event} = handle.params;


    const organizationExists = await getOrganizationByName(organization as string);
    // Check if organization exists
    if (!organizationExists) {
        throw error(404, 'Organization not found');
    }

    // Check if event exists
    if (!await getEventNameInOrganization(event as string, organizationExists.id as string)) {
        throw error(404, 'Event not found');
    }

    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ( { request, locals, params } ) => {
        // check if user is logged in
        const session = await locals.auth();
        if (!session?.user) {
            throw error(401, 'Unauthorized');
        }

        const {organization, event} = params;

        const data = await request.formData();
        const ticketType = data.get('ticketType');

        

        // Create ticket
        const organizationId = (await getOrganizationByName(organization as string)).id;
        const eventId = (await getEventNameInOrganization(event as string, organizationId as string)).id;
        await createTicket(ticketType as string, eventId as string, session.user.id as string);
    }
};
    