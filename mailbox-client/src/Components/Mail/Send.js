import { Container, Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Send = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const subjectChangeHandler = (e) => {
    setSubject(e.target.value);
  }

  const editorHandler = (newEditorState) => {
    setEditorState(newEditorState);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const senderEmail = localStorage.getItem('email').replace(/[@.]/g,'');
    const recieverEmail = email.replace(/[@.]/g,'');
    await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/sentBox/${senderEmail}.json`,{
      method:'POST',
      body: JSON.stringify({
        myEmail: senderEmail,
        subject: subject,
        message: editorState.getCurrentContent().getPlainText()
      }),
      headers: {
        'Content-type' : 'application/json'
      }
    }).then(res => {
      if(res.ok){
        setEmail('');
        setSubject('');
        setEditorState(EditorState.createEmpty());
        return res.json();
      }else{
        console.log(res.error.message);
      }
    })
    await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/inbox/${recieverEmail}.json`,{
      method:'POST',
      body: JSON.stringify({
        recieverEmail: recieverEmail,
        subject: subject,
        message: editorState.getCurrentContent().getPlainText(),
        isSeen: true
      }),
      headers: {
        'Content-type' : 'application/json'
      }
    }).then(res => {
      if(res.ok){
        setEmail('');
        setSubject('');
        setEditorState(EditorState.createEmpty());
        return res.json();
      }else{
        console.log(res.error.message);
      }
    })
  }

  return  (
    <div>
      <Container className="border rounded shadow mt-5 p-2 bg-gray-300">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-bold">To</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={emailChangeHandler} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-bold">Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" value={subject} onChange={subjectChangeHandler} />
          </Form.Group>
          <Editor
            editorState={editorState}
            onEditorStateChange={editorHandler}
          />
          <div className="d-flex justify-content-end">
            <Button type="submit" variant="warning" className="mr-3">Compose</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Send;
