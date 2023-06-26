// oak is pretty much similar to express in nodejs
import { Application } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const APP_HOST = '127.0.0.1';
const APP_PORT = 5000;

// Import router from routes file
import router from './routes/routes.ts';

// Create Application Like Express
const app = new Application()

// Add Routes
app.use(oakCors());
app.use(router.routes())
app.use(router.allowedMethods())

// Display App running
console.log(`App Started at Port ${APP_PORT}`)
await app.listen(`${APP_HOST}:${APP_PORT}`)