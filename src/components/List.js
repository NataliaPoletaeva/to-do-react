import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = (props) => {
  const {
    todos, handleChange, delTodo, setUpdate,
  } = props;
  return (
    <ul className="todo-items">
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default List;
