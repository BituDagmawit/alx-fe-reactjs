import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders initial todo", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo as done", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getAllByText("X")[0];
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
