import { useState } from "react";

function TForm ({addTask}) {
    const [userInput, setUserInput] = useState('');

    const saveKeyInput = (e) => {
        setUserInput(e.currentTarget.value)

    }

    const submitForm = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');

    }

    const pressEnter = (e) => {
        if(e.key === 'Enter') {
            submitForm(e);
        }

    }

    return (
        <form onSubmit={submitForm}>
        <input 
        value={userInput}
        type='text'
        onChange={saveKeyInput}
        onKeyDown={pressEnter}
        placeholder="Введите задачу..." 
        />
        <button>Сохранить</button>

        </form>
    )
}

export default TForm
