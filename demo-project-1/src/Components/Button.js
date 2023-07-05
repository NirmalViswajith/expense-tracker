import Button from 'react-bootstrap/Button';

const FormButton = (props) => {
  return (
    <div>
      <Button type={props.type} className='my-2 btn-dark' onClick={props.onClick}>Add Goals</Button>
    </div>
  );
}

export default FormButton;