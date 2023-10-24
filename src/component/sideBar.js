import { useState } from 'react';
import '../index.css';
import { LogoIcon } from '../assets/taskIcons';

export default function SideBar({ tasks, setSort }) {
  const [active, setActive] = useState(1);
  const done = tasks.filter((task) => task.done).length;
  const todo = tasks.filter((task) => !task.done).length;

  function handleToggle(num) {
    setActive(num);
    setSort(num);
  }
  return (
    <div className="sidebar_container">
      <div className="logo">
        <LogoIcon />
        <span>W</span>a<span>T</span>a<span>D</span>o
      </div>

      <ActiveBtn num={1} active={active} click={handleToggle} value="all">
        all ({tasks.length})
      </ActiveBtn>
      <ActiveBtn num={2} active={active} click={handleToggle} value="todo">
        todo ({todo})
      </ActiveBtn>
      <ActiveBtn num={3} active={active} click={handleToggle} value="done">
        done ({done})
      </ActiveBtn>
    </div>
  );
}

function ActiveBtn({ children, active, click, num, setSort }) {
  return (
    <div
      className={active === num ? ' active' : 'actvities'}
      onClick={() => click(num)}
    >
      {children}
    </div>
  );
}
