<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { slug } = page.params;

    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    const res = await this.fetch(`blog/${slug}.json`);
    const article = await res.json();

    return { article };
  }
</script>

<script>
  export let article;
</script>

<svelte:head>
  <title>{article.title}</title>
</svelte:head>

<h1>{article.title}</h1>

<div class="content">
  {@html article.html}
</div>
