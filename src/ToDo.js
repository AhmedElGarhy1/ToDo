import NewToDo from "./NewToDo";

const ToDo = ({ list, setList }) => {
  const deleteTask = (e) => {
    const dataId = e.target.parentElement.getAttribute("data-id");
    setList((prev) => {
      const temp = [...prev].filter((ele) => ele.id !== parseInt(dataId));
      window.localStorage.setItem("todoList", JSON.stringify(temp));

      return temp;
    });
  };
  const completeTask = (e) => {
    let dataId = e.target.getAttribute("data-id");
    console.log(dataId);
    if (!dataId) {
      dataId = e.target.parentElement.getAttribute("data-id");
    }
    console.log(dataId);

    let bool = false;
    e.target.classList.toggle("true") ? (bool = true) : (bool = false);
    setList((prev) => {
      const temp = [...prev].map((ele) => {
        if (ele.id === parseInt(dataId)) {
          ele.done = bool;
        }
        return ele;
      });
      window.localStorage.setItem("todoList", JSON.stringify(temp));

      return temp;
    });
  };

  return (
    <div className="container">
      <div className="todo-list">
        <NewToDo setList={setList} />
        {list &&
          list.map((ele, i) => (
            <div
              key={ele.id}
              className={`todo-card ${ele.done}`}
              data-id={ele.id}
              onClick={completeTask}
            >
              <h2>{ele.header}</h2>
              <span>{ele.date}</span>
              <button onClick={deleteTask} className="delete">
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToDo;
