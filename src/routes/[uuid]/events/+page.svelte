<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    let event = "3";

    function current(){
        event = "0";
    }

    function held(){
        event = "1";
    }

</script>

<!-- Box around the text -->
<div class="bg-gray-200 rounded mx-8 py-6 my-8 shadow-md">
  <div class="mx-8">

    
    <!-- Title and buttons to make options -->
    <div class="flex">
      <h1 class="text-3xl font-bold">Events</h1>
      <div class="ml-8">
        <button on:click={current} class="border border-gray-300 bg-green-100 hover:border-gray-500 rounded shadow-md font-bold px-2">Current</button>
        <button on:click={held} class="border border-gray-300 bg-green-100 hover:border-gray-500 rounded shadow-md font-bold px-2">Held</button>
      </div>
    </div>
    
    <!-- Descriptive text -->
    <p class=" mt-1">Select the event, you wish to view.</p>
    
    <!-- Botton -->
    <div class=" mt-7">
      <button class="bg-green-100 border border-gray-300 hover:border-gray-500 shadow-md font-bold py-1 px-2 rounded">
        Create
      </button>
    </div>
    
    {#if (event === "0")}
    <!-- Table for events -->
    <div>
        <div class="my-8 shadow-md table-auto">
          <table class="w-full border-collapse border border-gray-200">
            
            <!-- Head of the table -->
            <thead class="border border-gray-200 bg-green-400">
              <tr>
                <td class="font-bold pl-3">Event name</td>
                <td class="font-bold pl-3"><!-- Fill --></td>
              </tr>
            </thead>
            
            <!-- The indside of the table -->
            <tbody class="border border-gray-200 bg-green-100">
              <tr>
                <td class="pl-3">Information</td>
                <td class="pl-3">Early bird</td>
              </tr>
              <tr>
                <td class="pl-3">Lokation</td>
                <td class="pl-3">Normal</td>
              </tr>
              <tr>
                <td class="pl-3"></td>
                <td class="pl-3">Last minute</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    {/if}

  </div>
</div>