
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './ReadMsg.module.css';
import { Container } from 'react-bootstrap';

const ReadMsg = () => {
    const {id}=useParams();
    const mails=useSelector(state=>state.mail.mails);
    const myEmail=localStorage.getItem('email').replace(/['@','.']/g,'');

    const singleMail=mails.filter((item)=>item.id===id);
    console.log(singleMail)
    const message=singleMail[0].message
    const sender = singleMail[0].sender;
    const subject = singleMail[0].subject;

    console.log(mails,'Single-message');
    useEffect(()=>{
      const fetchData=async ()=>{
      try {
          const response=await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/inbox/${myEmail}/${id}.json`,{
            method:'PATCH',
            body:JSON.stringify({
              dot:false
            }),
            headers:{
              'Content-Type':'application/json'
            }
          })
          const data=await response.json();
          console.log(data);
        }
       catch (error) {
        console.log(error)
      }
    }
      fetchData();
    },[])

  return (
    <Fragment>
    <div className='d-flex justify-content-center'>
      <Container className='border rounded shadow bg-light p-2 mt-5 ml-5' style={{maxWidth:'600px'}}>
        <h1 className='font-bold'>From:- </h1>
        <p className='mb-2 ml-2'>{sender}</p>
        <h1 className='font-bold'>Subject:-</h1>
        <p className='mb-2 ml-2'>{subject}</p>
        <h1 className='font-bold'>Message:-</h1>
        <p className='mb-2 ml-2'>{message}</p>
      </Container>
      </div>
    </Fragment>
  )
}

export default ReadMsg
