import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Input from './Input';
import Nav from './Nav';
import List from './List';

const App = () => {
  const [todos, setState] = useState([]);

  useEffect(() => {
    if (todos) {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => response.json())
        .then((data) => setState(data));
    }
  }, []);
  const handleChange = (id) => {
    setState((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const delTodo = (id) => {
    setState([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const addTodo = (newItem) => {
    const newTodo = {
      id: Math.random(),
      newItem,
      completed: false,
    };
    setState([...todos, newTodo]);
  };
  const setUpdate = (newItem, id) => {
    setState((prevState) => (
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, newItem,
          };
        }
        return todo;
      })
    ));
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              <Header />
              <Input addTodoItem={addTodo} />
              <List
                todos={todos}
                handleChange={handleChange}
                delTodo={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          )}
        />
      </Routes>
    </>
  );
};

export default App;
