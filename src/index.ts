import express from "express";
import type { Request, Response } from "express";
import helmet from "helmet";
import crypto from "crypto";

crypto.randomUUID();

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

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

const todos: Todo[] = [
    {
        id: "f402f809-3548-46ea-8111-e1c58a2ae32",
        title: "study algorithms",
        completed: false,
    },
    {
        id: "995febd4-d768-40e9-85bc-8b05cc94f53",
        title: "apex legends",
        completed: true,
    },
    {
        id: "20e0bad0-61b9-43f9-86d9-fa03d2fb2d0",
        title: "htmx app",
        completed: false,
    },
];

function GetTodos(): Todo[] {
    return todos;
}

function GetTodo(id: string): Todo | undefined {
    const index = todos.findIndex((todo) => {
        return todo.id === id;
    });

    if (index === -1) {
        return undefined;
    }

    return todos[index];
}

function CreateTodo(title: string, completed: boolean): string {
    const id = crypto.randomUUID();

    const todo: Todo = {
        id: id,
        title: title,
        completed: completed,
    };

    todos.push(todo);

    return id;
}

function UpdateTodoTitle(id: string, newTitle: string) {}

function UpdateTodoCompleted(id: string, completed: boolean) {}

function DeleteTodo(id: string) {}

function TodoView(todo: Todo): string {
    return `<div>${todo.title}</div>`;
}

function TodosView(todos: Todo[]): string {
    let output = "";
    todos.forEach((todo) => {
        output += TodoView(todo);
    });

    return output;
}

function IndexPageHandler(_req: Request, res: Response) {
    res.setHeader("Content-Type", "text/html");
    res.send(`
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTMX Todo</title>
        <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="p-5">
        <header class="py-4">
            <h1 class="text-3xl text-center underline font-bold text-sky-600">Todo</h1>
        </header>
        <main class="flex flex-col justify-start items-center">
            <button hx-get="/todos" hx-target="#todos" hx-swap="innerHTML" class="text-white px-3 py-1 bg-sky-500 rounded hover:bg-sky-600">get todos</button>
            <div id="todos" class="flex flex-col my-2"></div>
        </main>
    </body>
</html>
    `);
}

function GetTodosHandler(_req: Request, res: Response) {
    const todos = GetTodos();

    res.setHeader("Content-Type", "text/html");
    res.send(TodosView(todos));
}

app.get("/", IndexPageHandler);

app.get("/todos", GetTodosHandler);

async function main() {
    console.log("HTMX2 server!");

    app.listen(PORT, () => {
        console.log(`Server listening on http://127.0.0.1:${PORT}`);
    });
}

main().catch((err) => console.error(err));
