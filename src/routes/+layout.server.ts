import type { LayoutServerLoad } from './$types';
import { getOrganizationById } from "../db";

export const load: LayoutServerLoad = async ( event ) => {
    const session = await event.locals.auth();

    let organization = null;

    if (session?.user?.organizationId) {
        organization = await getOrganizationById(session.user.organizationId);
    }

    

    return {
        session,
        organization,
    }
};