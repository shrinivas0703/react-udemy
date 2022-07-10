import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(username, age) {
    setUsersList((prevUsersList) => {
      return [...usersList, {id: Math.random().toString(), name: username, age: age}];
    });
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
