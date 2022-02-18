import React, { useRef, useState } from "react";
import List from "./components/List";
import { v4 } from "uuid";
function App() {
  const userInput = useRef();
  const [users, setUsers] = useState([
    { id: "a", name: "John" },
    { id: "b", name: "Doe" }
  ]);

  const addUser = () => {
    userInput.current.focus();
    console.log("User Input is", userInput);
    const newUser = {
      id: v4(),
      name: userInput.current.value
    };
    // setText("");
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <input type="text" ref={userInput} placeholder="Username" />
      <button onClick={addUser}>Add User</button>
      <List list={users} />
    </div>
  );
}

export default App;

//useRef

//1, Whenever you want to store a value but do not
//want to rerender

//2. Used to  make unctrolled inputs
