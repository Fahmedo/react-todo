import '../index.css';
import { useEffect, useState } from 'react';

export default function TaskForm({
  setAddTask,
  tasks,
  setTasks,
  done,
  setDone,
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [activity, setActivity] = useState('');

  function hadleSubmit(e) {
    e.preventDefault();
    const newTask = { title, description, done, id: Date.now() };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDone(false);
    setAddTask(false);
  }

  useEffect(
    function () {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    [tasks]
  );
  return (
    <form className="task_modal" action="" onSubmit={hadleSubmit}>
      <div class="header">Add Task</div>
      <label for="Title">Title</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="description">Description</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        maxLength={90}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button>Create task</button>
      <div
        className="error"
        style={{ display: title === '' ? 'block' : 'none' }}
      >
        details can't be blank 😏
      </div>
    </form>
  );
}
