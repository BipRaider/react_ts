'use strick';

import React, { useRef, useState } from 'react';

interface ITodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<ITodoFormProps> = props => {
  const [inputText, setInputText] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onAdd(inputText!);
      setInputText('');
    }
  };

  const keyPressHandlerRef = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <>
      <div className="input-field mt2">
        <input
          value={inputText}
          onChange={changeHandler}
          type="text"
          id="title"
          placeholder="Enter text"
          onKeyPress={keyPressHandler}
        />

        <label htmlFor="title" className="active">
          Enter text
        </label>
      </div>
      <div className="input-field mt2">
        <input
          ref={ref}
          type="text"
          id="title"
          placeholder="Enter text"
          onKeyPress={keyPressHandlerRef}
        />

        <label htmlFor="title" className="active">
          Ref enter text
        </label>
      </div>
    </>
  );
};

export default TodoForm;
