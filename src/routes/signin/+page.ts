import { redirect, error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Redirect to home page if user tries to access this page directly
export const load = (async () => {
    throw error(404,"You can't access this page directly");
}) satisfies PageLoad;