import Button from 'react-bootstrap/Button';

const Error = (props) => {
  
  const showError = () => {
    props.onOkayClick();
  };

  return (
    <div className='border my-3 bg-light text-dark p-2 rounded'>
      <header style={{fontWeight:'bold'}} className='text-danger'>{props.title}</header>
      <hr />
      <p>{props.message}</p>
      <footer className='text-end'>
        <Button className="btn-danger" onClick={showError}>Okay</Button>
      </footer>
    </div>
  );
};

export default Error;
