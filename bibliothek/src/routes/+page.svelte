<script>
    const { books, data } = $props();
</script>

<section class="hero">
    <div class="hero-content">
        <h1 class="typewriter">Welcome to MiniBibliothek</h1>
        <p><i>Image generated with ChatGPT and DALL-E</i></p>
    </div>
</section>

<!-- Counter Status Kacheln -->
<section class="stats-section">
    <div class="row mt-5">
        <div class="col-md-3">
            <div
                class="card text-white text-center"
                style="background-color: seagreen;"
            >
                <div class="card-body">
                    <h4>Read</h4>
                    <p>{data.stats.read}</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div
                class="card text-white text-center"
                style="background-color: goldenrod;"
            >
                <div class="card-body">
                    <h4>Currently Reading</h4>
                    <p>{data.stats["currently reading"]}</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div
                class="card text-white text-center"
                style="background-color: steelblue;"
            >
                <div class="card-body">
                    <h4>On Hold</h4>
                    <p>{data.stats["on hold"]}</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div
                class="card text-white text-center"
                style="background-color: firebrick;"
            >
                <div class="card-body">
                    <h4>Wanna Read</h4>
                    <p>{data.stats["wanna read"]}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        background-image: url("/bib1.png");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: white;
    }

    .hero-content {
        padding: 2rem;
        border-radius: 1rem;
    }

    .typewriter {
        font-size: 2.5rem;
        font-weight: bold;
        animation: typing 3s steps(30, end);
        white-space: nowrap;
        overflow: hidden;
        animation-fill-mode: forwards; /*dass der text auch nach der animation bleibt*/
        border-right: 0.12em solid seagreen;
        width: 0;
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: seagreen;
        }
    }

    .col-md-3 {
        margin-bottom: 3em;
    }
    .row {
        margin-top: 5rem;
    }
    .card {
        border-radius: 1rem;
        transition: transform 0.2s ease;
    }
    .card:hover {
        transform: scale(1.05);
    }

    p {
        font-size: 1em;
        margin: 0;
        color: white;
    }
</style>
