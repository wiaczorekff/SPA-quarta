import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return; // Validação para não aceitar tarefas vazias
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const data = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        data: [completedTasks, pendingTasks],
        backgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            {task.text}
            <button onClick={() => handleRemoveTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <div style={{ width: '400px', marginTop: '40px' }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default App;
