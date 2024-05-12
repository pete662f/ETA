<script lang="ts">
    import { Variable } from 'svelte-hero-icons';
    import type { PageData } from './$types';
    
    export let data: PageData;

    let selected = "0";

</script>

<!-- Box around the text -->
<div class="bg-gray-200 rounded mx-8 py-8 my-8 shadow-md">
    <!-- Title -->
    <h1 class="text-3xl font-bold ml-8">Your Data</h1>

    <!-- Descriptive text -->
    <p class="ml-9 mt-1">Select the event, you wish to view data on.</p>

    <!-- Dropdown select menu -->
    <div class="relative inline-block text-left ml-8 mt-6">
        <select bind:value={selected} class="block appearance-none w-full bg-green-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow-md leading-tight focus:outline-none focus:bg-green-100 focus:border-gray-500">
          <option value="0">Select event</option>
          <option value="1">Rave</option>
          <option value="2">Prom</option>
          <option value="3">Intro</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 12l-6.147-6.147a1 1 0 0 1 1.414-1.414L10 9.586l4.733-4.733a1 1 0 0 1 1.414 1.414L10 12z"/>
          </svg>
        </div>
    </div> 
  
    <!-- When selected a value, the page changes -->
  {#if (selected === "1")}
    <!-- Table for event data -->
    <div>
      <div class="m-8 shadow-md">
        <table class="w-full border-collapse border border-gray-200">
          <!-- The upper part of the table -->
          <thead class="bg-green-400">
            <tr>
              <th class="border border-gray-200 text-left">User</th>
              <th class="border border-gray-200 text-left">Ticket Type</th>
              <th class="border border-gray-200 text-left">Gender</th>
              <th class="border border-gray-200 text-left">Arrival</th>
              <th class="border border-gray-200 text-left">Drinks Purchased</th>
              <th class="border border-gray-200 text-left">Wardrobe Visit</th>
              <th class="border border-gray-200 text-left">Approximately Departure</th>
            </tr>
          </thead>
          <!-- The indside of the table -->
          <tbody class="bg-green-100">
            <tr>
              <td class="border border-gray-200">?</td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  {/if}

  {#if (selected === "2")}
    <!-- Table for event data -->
    <div>
      <div class="m-8 shadow-md">
        <table class="w-full border-collapse border border-gray-200">
          <!-- The upper part of the table -->
          <thead class="bg-green-400">
            <tr>
              <th class="border border-gray-200 text-left">User</th>
              <th class="border border-gray-200 text-left">Ticket Type</th>
              <th class="border border-gray-200 text-left">Gender</th>
              <th class="border border-gray-200 text-left">Arrival</th>
              <th class="border border-gray-200 text-left">Drinks Purchased</th>
              <th class="border border-gray-200 text-left">Wardrobe Visit</th>
              <th class="border border-gray-200 text-left">Approximately Departure</th>
            </tr>
          </thead>
          <!-- The indside of the table -->
          <tbody class="bg-green-100">
            <tr>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200">?</td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  {/if}

  {#if (selected === "3")}
    <!-- Table for event data -->
    <div>
      <div class="m-8 shadow-md">
        <table class="w-full border-collapse border border-gray-200">
          <!-- The upper part of the table -->
          <thead class="bg-green-400">
            <tr>
              <th class="border border-gray-200 text-left">User</th>
              <th class="border border-gray-200 text-left">Ticket Type</th>
              <th class="border border-gray-200 text-left">Gender</th>
              <th class="border border-gray-200 text-left">Arrival</th>
              <th class="border border-gray-200 text-left">Drinks Purchased</th>
              <th class="border border-gray-200 text-left">Wardrobe Visit</th>
              <th class="border border-gray-200 text-left">Approximately Departure</th>
            </tr>
          </thead>
          <!-- The indside of the table -->
          <tbody class="bg-green-100">
            <tr>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200">?</td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
              <td class="border border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  {/if}

</div>


