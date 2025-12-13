import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';


describe('TodoList Component', () => {
beforeEach(() => render(<TodoList />));


test('renders initial demo todos', () => {
expect(screen.getByText('Learn React')).toBeInTheDocument();
expect(screen.getByText('Write tests')).toBeInTheDocument();
});


test('can add a new todo', () => {
const input = screen.getByPlaceholderText('Add todo');
const addButton = screen.getByText('Add');


fireEvent.change(input, { target: { value: 'ALX Todo' } });
fireEvent.click(addButton);


expect(screen.getByText('ALX Todo')).toBeInTheDocument();
});


test('can toggle todo completion', () => {
const todo = screen.getByText('Learn React');
fireEvent.click(todo);
expect(todo).toHaveStyle('text-decoration: line-through');
});


test('can delete a todo', () => {
const deleteButtons = screen.getAllByText('Delete');
fireEvent.click(deleteButtons[0]);
expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
});