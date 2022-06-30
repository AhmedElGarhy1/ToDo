import { useState } from "react";

const NewToDo = ({ setList }) => {
  const [header, setHeader] = useState("");
  const [date, setDate] = useState("");

  const handleClick = () => {
    if (header !== "" && date !== "") {
      const toInsert = { header, date, done: false, id: Date.now() };
      setList((prev) => {
        const temp = [...prev];
        temp.unshift(toInsert);
        window.localStorage.setItem("todoList", JSON.stringify(temp));
        return temp;
      });
      setHeader("");
      setDate("");
    }
  };
  return (
    <div className="current todo-card">
      <input
        type="text"
        placeholder="Task Name"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default NewToDo;
