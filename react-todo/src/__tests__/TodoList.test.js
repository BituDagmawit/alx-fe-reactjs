import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

test("renders initial todo", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("adds a todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("X"));
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
