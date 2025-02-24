import React from 'react';
import Checkbox from './Checkbox';
import EditableMode from './EditableMode';
import type { TaskType } from './TodoList';

type TodoProps = {
    tasks: Array<TaskType>;
    changeStatus: (id: string, completed: boolean) => void;
    changeTask: (id: string, title: string, completed: boolean) => void;
    removeTask: (id: string) => void;
};

const Todo: React.FC<TodoProps> = ({ tasks, changeStatus, changeTask, removeTask }) => (
    <>
        {tasks.map(t => (
            <li key={t.id} style={{ paddingLeft: 10 }}>
                <Checkbox
                    checked={t.completed}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeStatus(t.id, e.target.checked)}
                />

                <EditableMode
                    title={t.title}
                    id={t.id}
                    removeTask={removeTask}
                    changeTask={changeTask}
                    checked={t.completed}
                />
            </li>
        ))}
    </>
);
export default Todo;
