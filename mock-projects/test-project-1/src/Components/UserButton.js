import Button from 'react-bootstrap/Button';

const UserButton = (props) => {
  
  return (
    <Button className='bg-light text-dark' style={{border:'black', fontWeight:'bold'}} onClick={props.onClick}>Add User</Button>
  );
}

export default UserButton;