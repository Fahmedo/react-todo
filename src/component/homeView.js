import '../index.css';
import TaskView from './taskView';
import SideBar from './sideBar';
import { AddTaskIcon } from '../assets/taskIcons';
import { useState } from 'react';
import TaskForm from './taskForm';

export default function AddTask() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: 'wash dishes',
      description: 'Example: by 2pm i will get my dish washed ',
      done: true,
    },
    {
      id: 1,
      title: 'Go to the mall',
      description: 'Example: get grocesaries ',
      done: false,
    },
    {
      id: 2,
      title: 'Call babe',
      description: 'Example: call me babe',
      done: true,
    },
  ]);
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
