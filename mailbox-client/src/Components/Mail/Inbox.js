import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MailAction } from "../ReduxStore/AuthReducer";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Messages from "./Messages";
const Inbox = () => {
  const myEmail = localStorage.getItem('email').replace(/[@.]/g, '');
  const dispatch = useDispatch();
  const mailInbox = useSelector(state => state.mail.mails);
  console.log(mailInbox)
  const [reRender, setreRender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/inbox/${myEmail}.json`)
        const mydata = await response.json();
        let data = [];
        for (let key in mydata) {
          data.push({ id: key, ...mydata[key] });
        }
        dispatch(MailAction.updateInbox(data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  const dot = {
    width: '8px',
    height: '8px',
    background: 'blue',
    borderRadius: '50%',
    marginLeft: '10px'
  }

  return (
    <div>

      <Container>
        <h1>Mail Inbox</h1>
        <div style={{ maxWidth: '600px' }}>
          <ul className=''>
            {mailInbox.map((mail) => (
              <li className='d-flex align-items-center border rounded bg-light decoration-none' key={mail.id}>
                {mail.isSeen ? <Button variant='primary' className="ml-2"></Button>: <Button variant="success" className="ml-2"></Button>}
                <Link to={`/messages/${mail.id}`} className="text-decoration-none text-dark"><p className=" mt-3 ml-3" >From: {mail.recieverEmail}</p></Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

    </div>

  );

}

export default Inbox;