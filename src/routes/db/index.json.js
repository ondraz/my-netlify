import articles from '/articles.json';

export async function get() {
    return {
        body: articles
    }
}