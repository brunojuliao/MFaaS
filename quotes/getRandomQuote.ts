import { Response } from "https://deno.land/x/oak/mod.ts";
import { randomInt } from "https://deno.land/std@0.158.0/testing/mock_examples/random.ts?s=randomInt";
import quotesDb from "../db/quotes.json" assert { type: "json" };

const getRandomQuote = ({ response }: { response: Response }) => {
    try {
        response.body = quotesDb.quotes[randomInt(0, quotesDb.quotes.length)];
    } catch (err) {
        console.error(err.message);
    }
}

export default getRandomQuote