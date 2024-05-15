<script lang="ts">
    import { page } from "$app/stores"
    import { SignIn, SignOut } from "@auth/sveltekit/components"
    import type { PageData } from './$types';

    export let data: PageData;

    
    
</script>

<!-- Box, thats around the hole text -->
<div class="bg-gray-200 rounded mx-8 py-8 my-8 shadow-md">
    
    <!-- Title for the side -->
    <h1 class="text-3xl font-bold ml-8">Welcome to Event Tickets Analytics</h1>

    <!-- Describing text -->
    <p class="ml-9 mt-1">We are here to help you, sort your data. blablabla</p>

    <!-- Login part -->
    <div class="flex ml-9 mt-7">
        <div class="bg-green-100 border border-gray-300 hover:border-gray-500 font-bold py-1 px-2 rounded-md">
            <SignIn>     
            </SignIn>
        </div>
    </div>
</div>
