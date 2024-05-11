<script lang="ts">
    import { Icon, User } from "svelte-hero-icons";
    import { onMount } from "svelte";

    import { SignIn, SignOut } from "@auth/sveltekit/components";
    import { page } from "$app/stores";

    // Handles the logic to show/hide the dropdown menu
    let showDropdown: boolean = false;

    function menu(): void {
        showDropdown = !showDropdown;
    }

    // Close dropwodn if clicked outside the dropdown
    function handleClickOutside(event: MouseEvent): void {
        if (!(event.target as HTMLElement).closest(".dropdown-container") && !(event.target as HTMLElement).closest(".dropdown-button")) {
            showDropdown = false;
        }
    }

    // Lissen for clicks outside the dropdown
    onMount(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    });
</script>
<div class="flex flex-col h-screen justify-between">

    <!-- Navigation section -->
    <nav class="bg-gray-800 py-4">
        <div class="container mx-auto px-4">
            <!-- Content of navigation section -->
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center">
                    <!-- Logo or name of the website and links to other pages -->
                    <div class="flex space-x-4 items-center">
                        <a href="/" class="text-white text-2xl font-bold">Event Tickets Analytics</a>
                        <a href="/your-data/" class="text-gray-300 hover:text-white">Your Data</a>
                        <a href="/events" class="text-gray-300 hover:text-white">Events</a>
                        <a href="/" class="text-gray-300 hover:text-white">Economy</a>
                    </div>
                    <!-- Logo for user -->
                    <div class="flex space-x-4 dropdown-button">
                        <button on:click={menu} type="button" id="menu-button" aria-haspopup="true" aria-expanded={showDropdown}>
                            <Icon src="{User}" solid class="text-gray-300 hover:text-white w-6 h-6" />
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Dropdown menu -->
    <div role="menu" tabindex="-1" class="dropdown-container relative inline-block text-left">
        <!-- Dropdown menu, show/hide based on menu state -->
        {#if showDropdown}
        <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
              {#if $page.data.session}
                <SignOut>
                    <div slot="submitButton" class="text-red-700 block px-4 py-2 text-sm w-fit font-bold">
                        Sign out
                    </div>
                </SignOut>
              {:else}
                <SignIn>
                    <div slot="submitButton" class="text-gray-700 block px-4 py-2 text-sm w-fit font-bold">
                        Sign in
                    </div>
                </SignIn>
              {/if}
            </div>
        </div>
        {/if}
    </div>
    
    <main class="flex-grow">
    <slot />
    </main>

    <!-- Footer section -->
    <footer class="bg-gray-800 py-4">
        <div class="container mx-auto px-4">
            <!-- Content of footer section -->
            <div class="flex space-x-4 items-center">
                <a href="/" class="text-gray-300 hover:text-white">Help</a>
                <a href="/" class="text-gray-300 hover:text-white">About us</a>
            </div>
        </div>
    </footer>
    
</div>