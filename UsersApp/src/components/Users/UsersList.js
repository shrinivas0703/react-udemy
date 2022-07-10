import React from "react";
import Card from "../UI/Card";
import "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className = "users">
      <ul>
        {props.users.map((user) => (
          <li key = {user.id}>
            {" "}
            {user.name} ({user.age} years old){" "}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;