<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('/db.json');
        if (res.ok) {
            return {
                props: {
                    articles: await res.json(),
                },
            };
        }
        return {
            status: res.status,
            error: new Error("Could not load"),
        };
    }
</script>

<script>
    export let articles;
    let latestArticles = articles.articles;
    console.log(articles);
</script>

<svelte:head>
	<title>Database</title>
</svelte:head>

<div class="content">
	<h1>Database</h1>

    {#if latestArticles.length > 0}
        {#each latestArticles as article}
            <h2>{article.title}</h2>
        {/each}
    {:else}
        <p>Articles are coming soon</p>
    {/if}
</div>