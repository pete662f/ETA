<script lang="ts">
    import { page } from "$app/stores"
    import { SignIn, SignOut } from "@auth/sveltekit/components"
    import type { PageData } from './$types';

    export let data: PageData;

    
    
</script>

<div class="container mx-auto">
    <h1>Home</h1>
    <SignIn>

    </SignIn>
</div>
