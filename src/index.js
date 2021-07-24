import './style.css';
import TaskList from './tasklist.js';

document.getElementById('todo-list').appendChild(new TaskList().taskListComponent);