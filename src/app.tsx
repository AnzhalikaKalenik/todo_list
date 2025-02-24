import TodoList, { TaskType } from './components/TodoList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const initTasks: Array<TaskType> = [
        {
            id: '51c1c4f1-03bf-48bf-9705-9dc97ab61a76',
            title: 'new task',
            completed: false,
        },
        {
            id: 'c7034df3-eb7b-4cad-a323-3f5c6ceb9283',
            title: 'new task2',
            completed: true,
        },
    ];

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks') as string) || initTasks);
    const [filter, setFilter] = useState('Show All tasks');
    const count = tasks.length;

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(title: string) {
        if (title !== ' ' && title.trim()) {
            let newTask = { id: uuidv4(), title: title, completed: false };
            let newTasks = [newTask, ...tasks];
            setTasks(newTasks);
        }
    }

    function changeTask(id: string, title: string, completed: boolean) {
        setTasks(
            tasks.map((t: TaskType) =>
                t.id === id && t.title !== title ? { ...t, title: title, completed: false } : t
            )
        );
    }

    function changeStatus(id: string, completed: boolean) {
        const task = tasks.find((t: TaskType) => t.id === id);
        if (task) {
            task.completed = completed;
        }

        setTasks([...tasks]);
    }

    function removeTask(id: string) {
        const filteredTask = tasks.filter((t: TaskType) => t.id !== id);

        setTasks(filteredTask);
    }

    function changeFilter(str: string) {
        setFilter(str);
    }

    let tasksForTodoList = tasks;
    if (filter === 'Show Completed tasks') {
        tasksForTodoList = tasks.filter((t: TaskType) => t.completed === true);
    }
    if (filter === 'Show Active tasks') {
        tasksForTodoList = tasks.filter((t: TaskType) => t.completed === false);
    }

    return (
        <TodoList
            tasks={tasksForTodoList}
            addTask={addTask}
            removeTask={removeTask}
            changeFilter={changeFilter}
            changeTask={changeTask}
            changeStatus={changeStatus}
            count={count}
            filter={filter}
        ></TodoList>
    );
}

export default App;
