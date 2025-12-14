import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add todo");
    fireEvent.change(input, { target: { value: "New Todo" } });

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

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
