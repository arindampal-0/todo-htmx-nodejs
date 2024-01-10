/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line
import * as elements from "typed-html";

import { type Todo } from "./todo.js";

export function IndexPageView(): string {
    return (
        "<!DOCTYPE html>" +
        (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <title>HTMX Todo</title>
                    <script
                        src="https://unpkg.com/htmx.org@1.9.10"
                        integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
                        crossorigin="anonymous"
                    ></script>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body class="p-5">
                    <header class="py-4">
                        <h1 class="text-3xl text-center underline font-bold text-sky-600">
                            Todo
                        </h1>
                    </header>
                    <main class="flex flex-col justify-start items-center">
                        <button
                            hx-get="/todos"
                            hx-target="#todos"
                            hx-swap="innerHTML"
                            class="text-white px-3 py-1 bg-sky-500 rounded hover:bg-sky-600"
                        >
                            get todos
                        </button>
                        <div id="todos" class="flex flex-col my-2"></div>
                    </main>
                </body>
            </html>
        )
    );
}

export function TodoView(todo: Todo): string {
    return <div>{todo.title}</div>;
}

export function TodosView(todos: Todo[]): string {
    return (
        <div class="flex flex-col justify-start items-center">
            {todos.map((todo) => TodoView(todo))}
        </div>
    );
}
