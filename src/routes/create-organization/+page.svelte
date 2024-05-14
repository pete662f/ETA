<script lang="ts">
</script>

<div class="container mx-auto">
    <h1>Create Organization</h1>
    <form method="post" action="?/createOrganization">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <button class="bg-blue-400" type="submit">Create</button>
    </form>
</div>