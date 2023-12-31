import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Send.module.css'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React, { Fragment, useState } from 'react'

const Send = () => {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const EmailchangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const SubjectchangeHandler = (e) => {
        setSubject(e.target.value);
    }

    const editorHandler = (editorState) => {
        setEditorState(editorState)
        //    console.log(editorState.getCurrentContent().getPlainText(),'editorState');

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const sender = localStorage.getItem('email');
        const sender1 = sender.replace(/[@.]/g, '');
        const receiver = email.replace(/['@','.']/g, '');
        localStorage.setItem('recieverEmail', receiver);
        // console.log(sender,receiver);
        fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/sentBox/${sender1}.json`, {
            method: 'POST',
            body: JSON.stringify({
                to: email,
                subject: subject,
                message: editorState.getCurrentContent().getPlainText()

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (!res.ok) {
                console.log(res.error.message)
            } else {
                console.log('successfull');
                console.log(sender1);
                setEditorState('');
                setSubject('');
                setEmail('');
            }
        })
        fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/inbox/${receiver}.json`, {
            method: 'POST',
            body: JSON.stringify({
                sender: sender,
                subject: subject,
                message: editorState.getCurrentContent().getPlainText(),
                dot: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (!res.ok) {
                console.log(res.error.message)
            } else {
                console.log('successfull');
            }
        })
    }

    return (
        <Fragment>
            <div className={classes.main}>
                <Form className={`${classes.To}`} onSubmit={submitHandler} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='mr-2'>To:-</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={EmailchangeHandler} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='mr-2'>Subject:- </Form.Label>
                        <Form.Control type="text" placeholder='Enter Subject' value={subject} onChange={SubjectchangeHandler} />
                    </Form.Group>


                

                <div className={classes.editor}>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={editorHandler}
                    />
                </div>
                <div className='d-flex justify-content-end'>
                    <Button className='border-2 rounded shadow mt-2 p-2' variant="primary" type="submit">
                        Send
                    </Button>
                </div>
                </Form>
            </div>

        </Fragment>
    )
}

export default Send
