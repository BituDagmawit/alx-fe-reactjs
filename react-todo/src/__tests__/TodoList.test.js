import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For matchers like toBeInTheDocument
import TodoList from '../components/TodoList';

// Mock Date.now for predictable IDs in tests
// This ensures that when we add a new todo, its ID is predictable (e.g., 1000)
const MOCK_DATE = 1000;
global.Date.now = () => MOCK_DATE;


describe('TodoList Component', () => {

  // --- Test 1: Initial Render Test ---
  test('renders the initial todo items correctly', () => {
    render(<TodoList />);

    // Check for the title
    expect(screen.getByText('My Todo List')).toBeInTheDocument();

    // Check for the initial todo items
    expect(screen.getByText('Learn React Testing Library')).toBeInTheDocument();
    // Check for a completed item (which is greyed out/line-through)
    const completedTodo = screen.getByText('Implement Todo Component');
    expect(completedTodo).toBeInTheDocument();
    // The textDecoration is an indirect way to check state, but direct text check is primary

    expect(screen.getByText('Write Unit Tests')).toBeInTheDocument();
  });


  // --- Test 2: Adding Todos ---
  test('allows a user to add a new todo item', () => {
    render(<TodoList />);

    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    const newTodoText = 'Buy groceries';

    // Simulate typing into the input field
    fireEvent.change(input, { target: { value: newTodoText } });
    expect(input.value).toBe(newTodoText);

    // Simulate clicking the Add button
    fireEvent.click(addButton);

    // Verify the new todo is in the list
    const newTodoItem = screen.getByText(newTodoText);
    expect(newTodoItem).toBeInTheDocument();

    // Verify the input is cleared
    expect(input.value).toBe('');

    // Ensure the count increased (3 initial + 1 new = 4)
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(4);
  });

  // --- Test 3: Toggling Todos ---
  test('allows a user to toggle a todo item completion status', () => {
    render(<TodoList />);

    // Find the first non-completed todo
    // Note: The ID for 'Learn React Testing Library' is 1 from initial state
    const todoTextElement = screen.getByTestId('todo-text-1');
    // Check initial style (not completed/no line-through)
    expect(todoTextElement).toHaveStyle('text-decoration: none');

    // Simulate clicking the todo to toggle
    fireEvent.click(todoTextElement);

    // Check the updated style (completed/line-through)
    expect(todoTextElement).toHaveStyle('text-decoration: line-through');

    // Simulate clicking again to toggle back
    fireEvent.click(todoTextElement);

    // Check the style reverted
    expect(todoTextElement).toHaveStyle('text-decoration: none');
  });


  // --- Test 4: Deleting Todos ---
  test('allows a user to delete a todo item', () => {
    render(<TodoList />);

    const todoToDeleteText = 'Write Unit Tests';

    // Check that the todo exists initially
    expect(screen.getByText(todoToDeleteText)).toBeInTheDocument();

    // Get the list items before deletion (should be 3)
    let listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);

    // Find the delete button for 'Write Unit Tests' (ID is 3)
    const deleteButton = screen.getByTestId('delete-button-3');

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Verify the todo item is removed from the DOM
    expect(screen.queryByText(todoToDeleteText)).not.toBeInTheDocument();

    // Get the list items after deletion (should be 2)
    listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });
});