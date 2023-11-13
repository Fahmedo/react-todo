import '../index.css';
import TaskView from './taskView';
import SideBar from './sideBar';
import { AddTaskIcon } from '../assets/taskIcons';
import { useState } from 'react';
import TaskForm from './taskForm';

export default function AddTask() {
  const [tasks, setTasks] = useState(function () {
    const storedTask = localStorage.getItem('tasks');
    return JSON.parse(storedTask);
  });
  const [addTask, setAddTask] = useState(false);
  const [done, setDone] = useState(false);
  const [sort, setSort] = useState(1);

  return (
    <>
      <div className="add_icon" onClick={() => setAddTask((show) => !show)}>
        <AddTaskIcon />
      </div>

      <div className={addTask ? 'hidden' : 'home-container'}>
        <TaskForm
          tasks={tasks}
          setAddTask={setAddTask}
          setTasks={setTasks}
          done={done}
          setDone={setDone}
        />
      </div>

      <TaskView tasks={tasks} setTasks={setTasks} sort={sort} />
      <SideBar tasks={tasks} setSort={setSort} />
    </>
  );
}
