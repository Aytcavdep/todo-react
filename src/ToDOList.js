import TForm from './TForm'

function ToDOList ({todo, handleChangeComplete, removeTask}) {
    const {id, key, task} = todo
    const handleRemove =() => {
        removeTask(id)
    }
        return (
    <div key={id} className='item-todo'>
    <div className= {todo.complete ? 'item-text strike' : 'item-text'} onClick={() => handleChangeComplete(id)}>
    {task}
    </div>
    
    {//</div><div className='item-delete' onClick={() => removeTask(todo.id)}>}
    <div className='item-delete' onClick={handleRemove}>
    X
    </div>

    </div>
    )

}

export default ToDOList