import { useState } from "react";

function TComplete ({ todoComplete, removeTask, unComplete }) {
    return (
        <div key={todoComplete.id} className='item-todo'>
        <div className='item-text strike' onClick={() => unComplete(todoComplete.id)}>
        {todoComplete.task}
        </div>
        
        <div className='item-delete' onClick={() => removeTask(todoComplete.id)}>
        X
        </div>
    
        </div>
        )

}


export default TComplete;