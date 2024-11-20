import React from 'react';
import EditableMode from './EditableMode';
import type { TaskType } from './TodoList';

type TodoProps = {
    tasks: Array<TaskType>;
    changeStatus: (id: string, completed: boolean) => void;
    changeTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
};

const Todo: React.FC<TodoProps> = ({ tasks, changeStatus, changeTask, removeTask }) => {
    return (
        <>
            {tasks.map(t => (
                <li key={t.id} style={{ paddingLeft: 10 }}>
                    <input
                        type='checkbox'
                        style={{ width: 20, height: 20, margin: 16 }}
                        checked={t.completed}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeStatus(t.id, e.target.checked)}
                    ></input>

                    <EditableMode title={t.title} id={t.id} removeTask={removeTask} changeTask={changeTask} />
                </li>
            ))}
        </>
    );
};
export default Todo;
