<!-- Peter -->
<script lang="ts">
  import type { PageData } from '../events/$types';
  import { qr } from '@svelte-put/qr/svg';

  import { page } from '$app/stores';
  
  export let data: PageData;

  let showEvent = false;

  let eventData = {};

function viewEvent(event: string){
  
  // If the event is already shown, then hide it
  if (event == eventData){
    showEvent = !showEvent;
    return;
  }

  showEvent = true;
  // Set the event data
  eventData = event;

}
</script>
<!-- Julie -->
<!-- Box around the text -->
<div class="bg-gray-200 rounded mx-8 py-6 my-8 shadow-md">
<div class="mx-8">

  
  <!-- Title and buttons to make options -->
  <div class="flex">
    <h1 class="text-3xl font-bold">Events</h1>
    <div class="ml-8">    
      <!-- Loop through the events -->
      {#each data.events as event}
        <button on:click={viewEvent(event)} class="border border-gray-300 bg-green-100 hover:border-gray-500 rounded shadow-md font-bold px-2">{event.name}</button>
      {/each}
    </div>
  </div>
  
  <!-- Descriptive text -->
  <p class=" mt-1">Select the event, you wish to view.</p>
  
  <!-- Botton -->
  <div class=" mt-7">
    <a href="/dashboard/create-event" class="bg-green-100 border border-gray-300 hover:border-gray-500 shadow-md font-bold py-2 px-2 rounded">
      Create
  </a>
  </div>
  
{#if showEvent}
    <!-- Table for events -->
    <div>
      <div class="my-8 shadow-md table-auto">
        <table class="w-full border-collapse border border-gray-200">
          
          <!-- Head of the table -->
          <thead class="border border-gray-200 bg-green-400">
            <tr>
              <td class="font-bold pl-3">Event name</td>
              <td class="font-bold pl-3">{eventData.name}</td>
            </tr>
          </thead>
          
          <!-- The indside of the table -->
          <tbody class="border border-gray-200 bg-green-100">
            <tr>
              <td class="pl-3">Lokation</td>
              <td class="pl-3">{eventData.location}</td>
            </tr>
            <tr>
              <td class="pl-3">Available tickets</td>
              <td class="pl-3">{eventData.availableTickets}</td>
            </tr>
            <tr>
              <td class="pl-3">Date</td>
              <td class="pl-3">{eventData.date}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>

  <div>
    <h3>QR code to event</h3>
    <svg class="h-40 w-40"
      use:qr={{
        // The data to be encoded in the QR code
        data: "localhost:5173" + "/event/" + $page.data.organization.name + "/" + eventData.name,
        logo: "/favicon.png",
      }}
    />
  </div>
{/if}

</div>
</div>