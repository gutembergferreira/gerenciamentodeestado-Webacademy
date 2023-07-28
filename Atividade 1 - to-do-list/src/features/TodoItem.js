// TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeActivity, toggleActivityCompletion } from './toDoListSlice';

const TodoItem = ({ activity }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeActivity(activity.id));
  };

  const handleToggleCompletion = () => {
    dispatch(toggleActivityCompletion(activity.id));
  };

  return (
    <div className={`todo-item ${activity.completed ? 'todo-item-completed' : ''}`}>
      <span className="todo-item-text">{activity.text}</span>
      {activity.completed && <span className="completed-icon">V</span>}
      {activity.completed ? (
        <button onClick={handleToggleCompletion}>Desfazer</button>
      ) : (
        <button onClick={handleToggleCompletion}>Concluir</button>
      )}
      <button onClick={handleRemove}>Remover</button>
      
    </div>
  );
};

export default TodoItem;
