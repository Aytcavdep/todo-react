import TForm from "./TForm";

function ToDOList({ todo, handleChangeComplete, removeTask }) {
  const { id, task, complete } = todo;
  const handleRemove = () => {
    removeTask(id);
  };
  return (
    <div key={id} className="item-todo">
      <div
        className={complete ? "item-text strike" : "item-text"}
        onClick={() => handleChangeComplete(id)}
      >
        {task}
      </div>

      <div className="item-delete" onClick={handleRemove}>
        X
      </div>
    </div>
  );
}

export default ToDOList;
