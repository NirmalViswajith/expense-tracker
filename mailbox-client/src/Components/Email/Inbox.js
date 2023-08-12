import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mailSliceAction } from '../storeRedux/emailReducer';
import classes from './Inbox.module.css'

const Inbox = () => {
  const dispatch = useDispatch();
  const mailInInbox = useSelector(state => state.mail.mails);
  const [reRender, setreRender] = useState(true)
  const myEmail = localStorage.getItem('email').replace(/['@','.']/g, '');

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/inbox/${myEmail}/${id}.json`, {
        method: 'DELETE'
      })
      const deleteData = await response.json();
      console.log(deleteData);
      setreRender((prev) => !prev)
    } catch (error) {
      console.log(error)
    }
  }

  let data = [];

  useEffect(() => {
    const fetchDaata = async () => {
      try {
        const reponse = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/inbox/${myEmail}.json`);

        const mailData = await reponse.json();
        console.log('useEffectcalled', mailData);
        for (let key in mailData) {
          data.push({ id: key, ...mailData[key] })
        }

        dispatch(mailSliceAction.updateInbox(data))
      } catch (error) {
        console.log(error)
      }

    }
    fetchDaata();
  }, [reRender])
  return (
    <div className={classes.main} style={{ maxWidth: '600px' }}>
      {mailInInbox.length > 0 ?
        (<div className={classes.row}>
          {

            mailInInbox.map((item) => (
              <div className={classes.row1} key={item.id}>
                <div className={classes.user}>From :- {item.sender}</div>
                <div className={classes.subject}>{item.subject}</div>
                <div className={classes.msg}>
                  <NavLink to={`/message/${item.id}`} style={{ textDecoration: 'none' }}>{'click to view message'}</NavLink>
                </div>
                {item.dot && <div className={classes.dot}>
                </div>}
                <div className={classes.delete}>
                  <Button onClick={deleteHandler.bind(null, item.id)} style={{
                    border: '2px solid #000', 
                    borderRadius: '6px',
                    maxWidth: '90px',
                    padding: '3px'
                  }}>Delete</Button>
                </div>
              </div>
            ))

          }
        </div>) : <p>Inbox is empty</p>}

    </div>
  )
}

export default Inbox