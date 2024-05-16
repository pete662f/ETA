<script lang="ts">
</script>

<div class="container mx-auto">
    <h1>Create Event</h1>
    <form method="post">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>

            <label for="location">Location</label>
            <input type="text" id="location" name="location" required>

            <label for="availableTickets">Available tickets</label>
            <input type="number" id="availableTickets" name="availableTickets" required>

            <label for="date">Date</label>
            <input type="date" id="date" name="date" required>
        </div>
        <button class="bg-blue-400" type="submit">Create</button>
    </form>
</div>