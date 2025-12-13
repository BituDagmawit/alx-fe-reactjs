import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "../TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("adds todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "New" } });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New")).toBeInTheDocument();
});

test("toggles todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveClass("done");
});

test("deletes todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("X"));
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
