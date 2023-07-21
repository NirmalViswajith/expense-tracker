import {Form , Button, Container} from 'react-bootstrap';
const MyForm = () => {
  return(
    <Container className='border border-dark rounded bg-light my-4 p-2'>
      <Form>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control type='text'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Opening Text:</Form.Label>
          <Form.Control type='text' as='textarea' row={8}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Release Date:</Form.Label>
          <Form.Control type='date'></Form.Control>
        </Form.Group>
        <div className='d-flex justify-content-center'>
        <Button variant='outline-dark' className='my-4'>Add Movies</Button>
        </div>
      </Form>
    </Container>
  );
}

export default MyForm;