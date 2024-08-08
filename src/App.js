import React from 'react';

function App() {
  const tarefas = [
    'Comprar sucuzinho',
    'bater no carlão',
    'puxar ferro',
    'amassar a loira'
  ];

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
