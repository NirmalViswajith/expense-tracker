// User.js
import React from "react";
import UserList from "./UserList";

const User = (props) => {
  
  const list = props.user.map((userDetails) => (
    <UserList key={userDetails.id} name={userDetails.userName} college={userDetails.userCollege} age={userDetails.userAge} />
  ));

  return (
    <ul className="border border-dark p-3 rounded bg-dark" style={{ maxWidth: "530px" }}>
      {list}
    </ul>
  );
};

export default User;
