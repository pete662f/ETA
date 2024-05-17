import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { getOrganizationByName, getEventNameInOrganization } from "../../../db";


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

    console.log('Event exists');

    return {};
}) satisfies PageServerLoad;