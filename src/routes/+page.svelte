<!-- Julie -->
<script lang="ts">
    import { page } from "$app/stores"
    import { SignIn, SignOut } from "@auth/sveltekit/components"
    import type { PageData } from './$types';

    export let data: PageData;

    
    
</script>

<!-- Box, thats around the hole text -->
<div class="bg-gray-200 rounded mx-8 py-6 my-8 shadow-md">
    <div class="mx-8">
    
        <!-- Title for the side -->
        <h1 class="text-3xl font-bold mb-6">Welcome to Event Tickets Analytics (ETA)</h1>

        <!-- Describing text -->
        <h2 class="text-2xl font-semibold mb-6">Your ultimate source for collecting data from various events</h2>
        <p class="mb-6">
            At ETA, we make it easy and convenient to collect and analyze data from all types of events. 
            Whether you’re organizing conferences, trade shows, sports events, or social gatherings, our platform 
            helps you gain comprehensive insights into your data.
        </p>
        <h3 class="text-xl font-semibold mb-4">Why choose ETA?</h3>
        <ul class="text-left mb-6 list-disc ml-8">
            <li class="mb-2"><strong>Efficient Data Collection:</strong> Our intuitive tools make it quick and simple to collect data from your participants in real-time.</li>
            <li class="mb-2"><strong>Detailed Analysis:</strong> Access advanced analytics to understand your participants' behavior and preferences.</li>
            <li class="mb-2"><strong>User-Friendly Platform:</strong> Our easy-to-use interface ensures you can manage and analyze your data without technical expertise.</li>
            <li class="mb-2"><strong>Security and Privacy:</strong> We prioritize your data, ensuring it is handled with the highest standards of security and confidentiality.</li>
        </ul>
        <p class="mb-6">
            Sign up now and discover how ETA can revolutionize the way you collect and analyze data from your events. 
            Don’t miss out on valuable insights – start your journey with ETA today!
        </p>
    
        <!-- Login part -->
        <div class="flex">
            <div class="bg-green-100 border border-gray-300 hover:border-gray-500 font-bold py-1 px-2 rounded-md">
                <SignIn>
                    <span slot="submitButton">Sign in</span>     
                </SignIn>
            </div>
        </div>
    </div>
</div>
