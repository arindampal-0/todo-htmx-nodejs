import type { Request, Response } from "express";

import { GetTodos } from "../models/todo.js";
import { IndexPageView, TodosView } from "../views/views.js";

export function IndexPageHandler(_req: Request, res: Response) {
    res.setHeader("Content-Type", "text/html");

    res.send(IndexPageView());
}

export function GetTodosHandler(_req: Request, res: Response) {
    const todos = GetTodos();

    res.setHeader("Content-Type", "text/html");
    res.send(TodosView(todos));
}
