import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { mailSliceAction } from '../storeRedux/emailReducer';
import classes from './Sentbox.module.css';

const SentBox = () => {
  const dispatch = useDispatch();
  const [reRender, setReRender] = useState(true);
  const mailInSentbox = useSelector(state => state.mail.sendMails);
  const myEmail = localStorage.getItem('email').replace(/['@','.']/g, '');

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/sentBox/${myEmail}/${id}.json`, {
        method: 'DELETE'
      });
      const deleteData = await response.json();
      setReRender(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  }

  let data = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/sentBox/${myEmail}.json`);
        const mailData = await response.json();
        console.log('useEffect called', mailData);
        for (let key in mailData) {
          data.push({ id: key, ...mailData[key] });
        }

        dispatch(mailSliceAction.updateSentbox(data));
        console.log(mailInSentbox, 'mailInSentbox');
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [reRender]);
  console.log(data, 'data');

  return (
    <div className='d-flex justify-content-center mb-5'>
      <Container className="mt-4 border rounded shadow bg-light ml-5" style={{ maxWidth: '650px' }}>
        <h1 className='mb-2 mt-3'>SentBox</h1>

        {mailInSentbox.length > 0 ? (
          <div>
            {mailInSentbox.map((item) => (
              <div className="p-3 border-bottom" key={item.id}>
                <h4 className="font-bold">To:- </h4>
                <p className='mb-2 ml-2'>{item.to}</p>
                <div className="font-bold">Subject:- </div>
                <p className='mb-2 ml-2'>{item.subject}</p>
                <div className="font-bold">Message:-</div>
                <p className='mb-2 ml-2'>{item.message}</p>
                <div>
                  <button className='border-2 rounded shadow mt-2 p-2' onClick={deleteHandler.bind(null, item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="p-3">Sentbox is empty</p>
        )}
      </Container>
    </div>
  )
}

export default SentBox;
