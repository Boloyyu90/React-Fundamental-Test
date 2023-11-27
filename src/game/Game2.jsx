import React, { useState } from 'react';

const Game2 = () => {
  const [todoName, setTodoName] = useState('');
  const [todoNote, setTodoNote] = useState('');
  const [priority, setPriority] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (!todoName || !todoNote || !priority) {
      setError('Semua input harus diisi');
      return;
    }

    const newTodo = {
      name: todoName,
      note: todoNote,
      priority: priority,
    };

    setTodos([...todos, newTodo]);
    setTodoName('');
    setTodoNote('');
    setPriority('');
    setError('');
  };

  return (
    <div style={{ textAlign: 'left', marginLeft: '20px' }}>
      <h1>Game 2 - To-Do List with Priority</h1>

      <div className="row mb-3">
        {/* Kolom pertama */}
        <div className="col">
          <label htmlFor="todoName" className="form-label">
            Apa yang ingin dikerjakan?
          </label>
          <input
            type="text"
            className="form-control"
            id="todoName"
            placeholder="Nama To-Do-List"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            required
          />
          
          {/* Tambahkan textarea di bawah input teks */}
          <label htmlFor="todoNote" className="form-label mt-3">
            Catatan
          </label>
          <textarea
            className="form-control"
            id="todoNote"
            placeholder="Isi Catatan To-Do-List"
            value={todoNote}
            onChange={(e) => setTodoNote(e.target.value)}
            required
          />
        </div>

        {/* Kolom kedua */}
        <div className="col">
          <label htmlFor="priority" className="form-label">
            Pilih Priority
          </label>
          <select
            className="form-select"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="" disabled>Pilih Priority</option>
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            <option value="Biasa Saja">Biasa Saja</option>
          </select>
        </div>
      </div>

      <button onClick={handleAddTodo} className="btn btn-primary mb-3">
        Tambah To-Do List
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {todos.map((todo, index) => (
          <div key={index} className="col">
            <div className="card">
              <div
                className="card-header"
                style={{
                  backgroundColor:
                    todo.priority === 'Urgent'
                      ? 'red'
                      : todo.priority === 'Normal'
                      ? 'green'
                      : 'black',
                  color: 'white',
                }}
              >
                {todo.priority}
              </div>
              <div className="card-body">
                <h5 className="card-title">{todo.name}</h5>
                <p className="card-text">{todo.note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game2;
