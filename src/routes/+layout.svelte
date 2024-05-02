<script>
    import "../app.css";
    import { Icon, User } from "svelte-hero-icons";
</script>
<!-- Navigation section -->
<nav class="bg-gray-800 py-4">
    <div class="container mx-auto px-4">
        <!-- Content of navigation section -->
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <!-- Logo or name of the website -->
                <div class="flex space-x-4 items-center">
                    <a href="/" class="text-white text-2xl font-bold">Event Tickets Analytics</a>
                    <a href="/" class="text-gray-300 hover:text-white">Din Data</a>
                    <a href="/" class="text-gray-300 hover:text-white">Arrangementer</a>
                    <a href="/" class="text-gray-300 hover:text-white">Økonomi</a>
                </div>
                <!-- Links to other pages -->
                <div class="flex space-x-4">
                    <a href="/"><Icon src="{User}" solid class="text-gray-300 hover:text-white w-6 h-6" /></a>
                </div>
            </div>
        </div>
    </div>
</nav>


<slot />

