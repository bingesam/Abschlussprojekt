<div class="container mt-3">
    <div class="hero-section svelte-16ktbxa">
        <div class="hero-content svelte-16ktbxa">
            <h1 class="typewriter svelte-16ktbxa">Welcome to MiniBibliothek</h1>
            <!--<p class="fade-in velte-16ktbxa">Your p text</p>-->
        </div>
    </div>
</div>

<section class="stats-section svelte-16ktbxa">
    <div class="container">
        <div class="stats-grid svelte-16ktbxa">
            <div class="stat-card svelte-16ktbxa">
                <span class="number svelte-16ktbxa">6</span>
                <span class="label svelte-16ktbxa">Gelesen</span>
            </div>
            <div class="stat-card svelte-16ktbxa">
                <span class="number svelte-16ktbxa">2</span>
                <span class="label svelte-16ktbxa">Gerade am lesen</span>
            </div>
            <div class="stat-card svelte-16ktbxa">
                <span class="number svelte-16ktbxa">11</span>
                <span class="label svelte-16ktbxa">Noch offen</span>
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

    .stats-section{
        color: red;
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
