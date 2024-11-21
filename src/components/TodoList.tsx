import { useState, useCallback } from 'react';
import Header from './Header';
import Button from './Button';
import InputTodo from './InputTodo';
import Todo from './Todo';
import CountTodo from './CountTodo';

export type TaskType = {
    id: string;
    title: string;
    completed: boolean;
};
export type PropsType = {
    tasks: Array<TaskType>;
    addTask: (title: string) => void;
    changeTask: (id: string, title: string, completed: boolean) => void;
    changeStatus: (id: string, completed: boolean) => void;
    removeTask: (id: string) => void;
    changeFilter: (str: string) => void;
    count: number;
    filter: string;
};

export default function TodoList({
    tasks,
    addTask,
    changeTask,
    changeStatus,
    removeTask,
    changeFilter,
    count,
    filter,
}: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const onAddMemoized = useCallback(() => {
        addTask(newTaskTitle);
        setNewTaskTitle('');
    }, [addTask, newTaskTitle]);

    function newTaskTitleChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setNewTaskTitle(e.target.value);
    }

    function onKeyPressHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            onAddMemoized();
        }
    }

    const addTaskFunction = () => {
        onAddMemoized();
    };

    const onAllClickHandler = () => changeFilter('Show All tasks');
    const onActiveClickHandler = () => changeFilter('Show Active tasks');
    const onComplitedClickHandler = () => changeFilter('Show Completed tasks');

    return (
        <div style={{ maxWidth: 860 }}>
            <Header />
            <div style={{ display: 'flex', maxWidth: 560 }}>
                <InputTodo value={newTaskTitle} onChange={newTaskTitleChangeHandler} onKeyPress={onKeyPressHandler} />
                <Button onClick={addTaskFunction} title='Add' />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    $primary
                    onClick={onAllClickHandler}
                    title='Show All tasks'
                    style={filter === 'Show All tasks' ? { backgroundColor: '#bd93f9' } : {}}
                />
                <Button
                    $primary
                    onClick={onActiveClickHandler}
                    title='Show Active tasks'
                    style={filter === 'Show Active tasks' ? { backgroundColor: '#bd93f9' } : {}}
                />
                <Button
                    $primary
                    onClick={onComplitedClickHandler}
                    title='Show Completed tasks'
                    style={filter === 'Show Completed tasks' ? { backgroundColor: '#bd93f9' } : {}}
                />
            </div>
            <CountTodo count={count} />
            <ul>
                <Todo tasks={tasks} removeTask={removeTask} changeTask={changeTask} changeStatus={changeStatus} />
            </ul>
        </div>
    );
}
