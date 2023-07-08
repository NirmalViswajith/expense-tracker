import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./Components/UserForm";
import Container from "react-bootstrap/Container";
import User from "./Components/User";
import Row from "react-bootstrap/Row";

function App() {
  const [user, setUser] = useState([]);
  const newUser = (user) => {
    setUser((prevUser) => {
      const newUser = {userName: user.userName, userAge: user.userAge, id:Math.random().toString()};
      return [newUser, ...prevUser];
    })
  }
  return (
    <div>
      <Container className="p-2">
        <UserForm addNewUser={newUser}/>
        <Row className="justify-content-center align-items-center">
          <User user={user}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
