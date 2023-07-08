import Button from 'react-bootstrap/Button';

const Error = (props) => {
  const handleOkayClick = () => {
    props.onOkayClick();
  };

  return (
    <div className='border my-3 bg-light text-dark p-2'>
      <header style={{fontWeight:'bold'}}>{props.title}</header>
      <hr />
      <p>{props.message}</p>
      <footer className='text-end'>
        <Button onClick={handleOkayClick}>Okay</Button>
      </footer>
    </div>
  );
};

export default Error;
