import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList.jsx";

describe("TodoList Component", () => {
  test("renders initial todo", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });
});
