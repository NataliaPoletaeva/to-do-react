import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const [state, setState] = useState({
    edit: false,
  });

  const handleEdit = () => {
    setState({
      edit: true,
    });
  };
  const handleUpdate = (e) => {
    if (e.key === 'Enter') {
      setState({
        edit: false,
      });
    }
  };
  const viewMode = {};
  const editMode = {};
  if (state.edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const {
    todo: { id, completed, newItem },
    handleChange,
    delTodo,
    setUpdate,
  } = props;
  return (
    <>
      <li className="todo-item">
        <input type="checkbox" checked={completed} onChange={() => handleChange(id)} />
        <button type="button" onClick={() => delTodo(id)}>Delete</button>
        <span>{newItem}</span>
        <input
          value={newItem}
          type="text"
          style={editMode}
          onChange={(e) => { setUpdate(e.target.value, id); }}
          onKeyDown={handleUpdate}
        />
      </li>
      <div onDoubleClick={handleEdit} style={viewMode} />
    </>
  );
};

Item.propTypes = {
  todo: PropTypes.arrayOf(
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

export default Item;
