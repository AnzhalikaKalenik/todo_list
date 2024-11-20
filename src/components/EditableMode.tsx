import { useState, useRef, useLayoutEffect } from 'react';
import Button from './Button';
import styled from 'styled-components';

const SInput = styled.input`
    padding: 10px;
    margin: 10px;
    border: 2px double #bd93f9;
    border-radius: 8px;
`;

type EditableSpanProp = {
    title: string;
    id: string;
    changeTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
};

const EditableMode: React.FC<EditableSpanProp> = ({ title, id, removeTask, changeTask }) => {
    const [isEditMode, setEditMode] = useState(false);
    const [valueEdit, setValueEdit] = useState(title);
    const inputEl = useRef<HTMLInputElement | null>(null);

    useLayoutEffect(() => {
        if (isEditMode && inputEl.current) {
            inputEl.current.focus();
        }
    }, [isEditMode]);

    function editModeFalseHandler() {
        changeTask(id, valueEdit);
        setEditMode(false);
    }

    function editModeTrueHandler() {
        setEditMode(true);
        setValueEdit(title);
    }

    return (
        <>
            {isEditMode ? (
                <SInput
                    value={valueEdit}
                    ref={inputEl}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueEdit(e.target.value)}
                />
            ) : (
                <span style={{ fontSize: 26, fontWeight: 500 }}>{title}</span>
            )}
            {isEditMode ? (
                <div>
                    <Button title='Cancel' onClick={() => setEditMode(false)} />
                    <Button title='Save' onClick={() => editModeFalseHandler()} />
                </div>
            ) : (
                <div>
                    <Button title='Edit' onClick={() => editModeTrueHandler()} />
                    <Button title='Delete' onClick={() => removeTask(id)} />
                </div>
            )}
        </>
    );
};

export default EditableMode;
