<script>
    import GenreCard from "$lib/components/GenreCard.svelte";
    const { data } = $props();
</script>

<div class="container">
    <div class="header">
        <h1>Genres</h1>
        <p class="subtitle">{data.genres.length} Genres in der Bibliothek</p>
    </div>

    <div class="row g-4">
        {#each data.genres as genre}
            <div class="col-12 col-sm-6">
                <GenreCard genres={genre} />
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 2rem;
    }
    .header {
        text-align: center;
        margin-bottom: 3rem;
    }
    .header h1 {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }
</style>
