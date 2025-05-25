<script>
    export let data;
    //const stats = data.stats;
</script>

<div class="container mt-3">
    <div class="hero-section svelte-16ktbxa">
        <div class="hero-content svelte-16ktbxa">
            <h1 class="typewriter svelte-16ktbxa">Welcome to MiniBibliothek</h1>
            <!--<p class="fade-in velte-16ktbxa">Your p text</p>-->
        </div>
    </div>
</div>

<section class="stats-section svelte-16ktbxa">
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
    .hero-section {
        background-image: url("/bib1.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-content {
        text-align: center;
        margin-top: 50px;
    }

    .typewriter {
        font-size: 3em;
        font-weight: bold;
        color: white;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: 0.15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: 0.15em; /* Adjust as needed */
        animation:
            typing 4s steps(30, end),
            blink-caret 0.75s step-end infinite;
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

    p{
        font-size: 1.5em;
        margin: 0;
        color: white;
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
    }
</style>
