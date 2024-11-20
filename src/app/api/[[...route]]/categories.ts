import { Hono } from "hono";

const app = new Hono()
    .get("/", c => c.json("list categories"))
    .post("/", c => c.json("create a category", 201))
    .get("/:id", c => c.json(`get ${c.req.param("id")}`));

export default app;
