// import newToDo from "./ToDo";
import { useEffect, useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const temp = JSON.parse(window.localStorage.getItem("todoList"));
    if (temp) {
      setList(temp);
    }
  }, []);

  return (
    <div className="App">
      <ToDo setList={setList} list={list} />
    </div>
  );
}

export default App;
