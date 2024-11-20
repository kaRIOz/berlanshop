import type { AppType } from "@/app/api/[[...route]]/route";
// import env from "@/configs/env";
import { hc } from "hono/client";

export const client = hc<AppType>("http://localhost:3000");
