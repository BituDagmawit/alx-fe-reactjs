<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 1bb80d2 (working version with vite)
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
<<<<<<< HEAD
=======

>>>>>>> 1bb80d2 (working version with vite)
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add todo");
<<<<<<< HEAD
    fireEvent.change(input, { target: { value: "New Todo" } });

    fireEvent.click(screen.getByText("Add"));
=======
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);
>>>>>>> 1bb80d2 (working version with vite)

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

<<<<<<< HEAD
  test("toggles a todo completion", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

    test("deletes a todo", () => {
        render(<TodoList />);

        const deleteButtons = screen.getAllByText("Delete");
        fireEvent.click(deleteButtons[1]); // deletes "Write Tests"

        expect(screen.queryByText("Write Tests")).not.toBeInTheDocument();
    });

});
=======
  test("toggles todo completion", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText("Write Tests");
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
>>>>>>> 1bb80d2 (working version with vite)
