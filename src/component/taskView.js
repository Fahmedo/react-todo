import '../index.css';
import { Done, DeleteBtn } from '../assets/taskIcons';

export default function TaskView({ tasks, setTasks, sort }) {
  let sortTask;
  function handleDone(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: true };
        }
        return task;
      })
    );
    console.log('Working :', id);
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));

    // localStorage.removeItem('task', (task) => task.id === id);
  }

  if (sort === 1)
    sortTask = tasks.sort((a, b) => Number(a.done) - Number(b.done));
  if (sort === 2) sortTask = tasks.filter((task) => !task.done);
  if (sort === 3) sortTask = tasks.filter((task) => task.done);
  return (
    <div class="task-container">
      {sortTask.map((task) => (
        <div
          class="task"
          style={{
            textDecoration: task.done ? 'line-through' : '',
          }}
          key={task.id}
        >
          <div class="header">
            <h2>{task.title} </h2>
            <div className="icons">
              <div className="done-icon" onClick={() => handleDone(task.id)}>
                <Done />
              </div>
              <div
                className="delete-icon"
                onClick={() => handleDelete(task.id)}
              >
                <DeleteBtn />
              </div>
            </div>
          </div>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
