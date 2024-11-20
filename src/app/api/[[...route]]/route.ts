// import { z } from 'zod';
// import { zValidator } from '@hono/zod-validator';
import { Hono } from "hono";
import { handle } from "hono/vercel";

import categories from "./categories";

export const runtime = "edge";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/categories", categories); //.route('/books', books);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
