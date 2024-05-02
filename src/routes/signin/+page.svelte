<script lang="ts">
    import { signIn } from "../../auth"
    import { page } from "$app/stores";

    let email = "";
    let password = "";
</script>

<div>
    <form>
        <label>
            Email
            <input name="email" type="email" bind:value={email} />
        </label>
        <label>
            Password
            <input name="password" type="password" bind:value={password} />
        </label>
        <button on:click={() => signIn('credentials', { email, password })}>
            Log in
        </button>
    </form>
</div>