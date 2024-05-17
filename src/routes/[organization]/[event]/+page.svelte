<script lang="ts">
    import { page } from "$app/stores";
    import { SignIn, SignOut } from "@auth/sveltekit/components";

</script>

{#if $page.data.session?.user}
<div class="container mx-auto">
    <h1>Create Organization</h1>
    <form method="post">
        <div>
            <label for="ticketType">Ticket type</label>
            <select name="ticketType">
                <option value="earlyBird">Early bird</option>
                <option value="normal">Normal</option>
                <option value="lastMinute">Last minute</option>
            </select>
        </div>
        <button class="bg-blue-400" type="submit">Buy ticket</button>
    </form>
</div>
{:else}
    <h1>Not logged in</h1>
    <SignIn>
        <span slot="submitButton">Sign in</span>     
    </SignIn>
{/if}