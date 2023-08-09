import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';

const Messages = () => {
  const { id } = useParams();
  console.log(id);
  const mailBox = useSelector(state => state.mail.mails);
  console.log(mailBox)
  const myEmail = localStorage.getItem('email').replace(/[@.]/g, '');
  console.log(myEmail);
  
  const singleMail = mailBox.filter((mails) => mails.id === id);
  console.log(singleMail[0].message);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/inbox/${myEmail}/${id}.json`, {
          method: 'PATCH',
          body: JSON.stringify({
            isSeen: false
          }),
          headers: {
            'Content-type': 'application/json'
          }
        })
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData();
  }, [])
  return (
    <div>
      <Container className="border rounded shadow bg-light mt-5">
        <h1 className="text-xl font-bold">From:- </h1>
        <p className="ml-5">{singleMail[0].recieverEmail}</p>
        <h2 className="text-xl">Subject:- </h2>
        <p className="ml-5">{singleMail[0].subject}</p>
        <h2 className="text-xl">Message:- </h2>
        <p className="ml-5">{singleMail[0].message}</p>
      </Container>
    </div>
  );
};

export default Messages;
