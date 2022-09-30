import { Router } from "https://deno.land/x/oak/mod.ts";
import getRandomQuote from '../quotes/getRandomQuote.ts';
import getRandomQuoteByActor from '../quotes/getRandomQuoteByActor.ts';

const router = new Router()
router.get('/quotes/random', getRandomQuote)
router.get('/quotes/randomByActor', getRandomQuoteByActor)

export default router;