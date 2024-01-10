import express from "express";
import helmet from "helmet";
// import crypto from "crypto";

import { IndexPageHandler, GetTodosHandler } from "./handlers.js";

// crypto.randomUUID();

const app = express();
const PORT = 3000;

app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                scriptSrc: [
                    "'self'",
                    "https://unpkg.com",
                    "https://cdn.tailwindcss.com",
                ],
            },
        },
    })
);

app.get("/", IndexPageHandler);

app.get("/todos", GetTodosHandler);

async function main() {
    console.log("HTMX2 server!");

    app.listen(PORT, () => {
        console.log(`Server listening on http://127.0.0.1:${PORT}`);
    });
}

main().catch((err) => console.error(err));
