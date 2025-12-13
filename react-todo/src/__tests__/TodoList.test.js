import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial demo todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('can add a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add todo');
    const addButton = screen.getByText('Add');

    await user.type(input, 'ALX Todo');
    await user.click(addButton);

    expect(screen.getByText('ALX Todo')).toBeInTheDocument();
  });

  test('can toggle todo completion', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    await user.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');

    await user.click(deleteButtons[0]);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
