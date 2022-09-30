import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import Random from "https://deno.land/x/random@v1.1.2/Random.js";
import quotesDb from "../db/quotes.json" assert { type: "json" };

const getRandomQuoteByActor = (ctx: Context) => {
    try {
        const { actor } = helpers.getQuery(ctx, { mergeParams: true });
        const filtered = quotesDb.quotes.filter(q => q.actor == actor);
        const r = new Random();
        ctx.response.body = actor
            ? filtered.length
                ? filtered[r.int(0, filtered.length)]
                : `No quotes found for the actor ${actor}`
            : 'Missing querystring parameter actor';
    } catch (err) {
        console.error(err.message);
    }
}

export default getRandomQuoteByActor