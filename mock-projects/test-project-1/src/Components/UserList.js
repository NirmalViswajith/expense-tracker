const UserList = (props) => {

  const userList = `${props.name} - ${props.college} - (${props.age} years old)`;
  
  return (
    <li style={{listStyle:'none', fontWeight:'bold'}} className="border border-dark bg-light rounded text-center p-2 my-2">{userList}</li>
  );
}

export default UserList;