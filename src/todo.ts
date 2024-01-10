// import crypto from "crypto";

// crypto.randomUUID();

export interface Todo {
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

export function GetTodos(): Todo[] {
    return todos;
}

export function GetTodo(id: string): Todo | undefined {
    const index = todos.findIndex((todo) => {
        return todo.id === id;
    });

    if (index === -1) {
        return undefined;
    }

    return todos[index];
}

export function CreateTodo(title: string, completed: boolean): string {
    const id = crypto.randomUUID();

    const todo: Todo = {
        id: id,
        title: title,
        completed: completed,
    };

    todos.push(todo);

    return id;
}

export function UpdateTodoTitle(id: string, newTitle: string) {}

export function UpdateTodoCompleted(id: string, completed: boolean) {}

export function DeleteTodo(id: string) {}
