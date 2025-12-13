import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';


beforeEach(() => render(<TodoList />));


test('renders initial todos', () => {
expect(screen.getByText('Learn React')).toBeInTheDocument();
expect(screen.getByText('Write tests')).toBeInTheDocument();
});


test('adds a new todo', () => {
fireEvent.change(screen.getByPlaceholderText('Add todo'), {
target: { value: 'New Todo' },
});
fireEvent.click(screen.getByText('Add'));
expect(screen.getByText('New Todo')).toBeInTheDocument();
});


test('toggles todo completion', () => {
const todo = screen.getByText('Learn React');
fireEvent.click(todo);
expect(todo).toHaveStyle('text-decoration: line-through');
});


test('deletes a todo', () => {
fireEvent.click(screen.getAllByText('Delete')[0]);
expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});