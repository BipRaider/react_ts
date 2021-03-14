'use strick';

import React, { useState, useEffect } from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean;

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };

    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = confirm('вы уверены ?');
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };
  return (
    <section className="container">
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </section>
  );
};

export default TodoPage;
