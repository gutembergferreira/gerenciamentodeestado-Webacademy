import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addActivity } from './toDoListSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [newActivity, setNewActivity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  const handleAddActivity = () => {
    if (newActivity.trim() === '') {
      setErrorMessage('Por favor, insira uma atividade.');
    } else {
      dispatch(addActivity(newActivity));
      setErrorMessage('');
      setNewActivity('');
    }
  };

  return (
    <div>
      <h1>Lista de Atividades</h1>
      <div className="add_todo_list"  style={{ textAlign: 'center' }}>
        <label style={{ display: 'block' }}>Insira a atividade na Lista: </label>
        <input
          type="text"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
          maxLength={50} // Limita o input para no máximo 50 caracteres
          placeholder="Digite uma atividade..."
        />
        <button onClick={handleAddActivity}>Adicionar</button>
      </div>
      {errorMessage && <p className="error-message" style={{ textAlign: 'center', color: 'red' }}>{errorMessage} </p>}
      {activities.map((activity) => (
        <TodoItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default TodoList;
