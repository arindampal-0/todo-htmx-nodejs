import express from "express";
import helmet from "helmet";

const app = express();
const PORT = 3000;

app.use(helmet());

app.get("/", function (_req, res) {
    res.setHeader("Content-Type", "text/html");
    res.send(`
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTMX Todo</title>
    </head>
    <body>
        <h1>Todo</h1>
    </body>
</html>
    `);
});

async function main() {
    console.log("HTMX2 server!");

    app.listen(PORT, () => {
        console.log(`Server listening on http://127.0.0.1:${PORT}`);
    });
}

main().catch((err) => console.error(err));
