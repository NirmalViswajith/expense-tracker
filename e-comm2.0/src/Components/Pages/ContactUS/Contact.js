import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');


    const nameHandler=(e)=>{
        setName(e.target.value);
    };

    const emailHandler=(e)=>{
        setEmail(e.target.value);
    };

    const phoneHandler=(e)=>{
        setPhone(e.target.value);
    };

    async function handler(e){
        e.preventDefault();
        let data ={
            'name':name,
            'email':email,
            'phone':phone
        }
        const response= await fetch('https://contactusform-a776b-default-rtdb.firebaseio.com/contact.json',{
            method:'POST',
            body:JSON.stringify(data)
        });
        const datas=response.json();
        datas.then((res)=>console.log(res))
        setName('')
        setEmail('')
        setPhone('')
    }

  return (
   
    <Fragment>
<div className='contact-container' >

<Form>
    <div className='contact-sub'>
<Form.Group className="mb-3" controlId="formGroupName">
<Form.Label>Name</Form.Label>
<Form.Control value={name} onChange={nameHandler} type="text" placeholder="Enter Your Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="formGroupEmail">
<Form.Label>Email address</Form.Label>
<Form.Control value={email} onChange={emailHandler} type="email" placeholder="Enter email" />
</Form.Group>

<Form.Group className="mb-3" controlId="formGroupPhone">
<Form.Label>Phone No.</Form.Label>
<Form.Control value={phone} onChange={phoneHandler} type="number" placeholder="Enter Phone No." />
</Form.Group>
<Button onClick={handler} variant="primary" type="submit">
Submit
</Button>
</div>
</Form>

</div>
    </Fragment>
  )
}

export default Contact;