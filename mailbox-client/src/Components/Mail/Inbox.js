import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MailAction } from "../ReduxStore/AuthReducer";
import { Container, Button } from "react-bootstrap";
const Inbox = () => {
  const myEmail = localStorage.getItem('email').replace(/[@.]/g, '');
  const dispatch = useDispatch();
  const mailInbox = useSelector(state => state.mail.mails);
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
        console.log(data);
        dispatch(MailAction.mail(data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])


  return (
    <div>

      <Container>
        <h1>Mail Inbox</h1>
        <div  style={{ maxWidth: '600px' }}>
          <ul className=''>
            {mailInbox.map((mail) => (
             
              
              <li className='d-flex align-items-center border rounded bg-light decoration-none'>
                <Button className='ml-2 mr-2'>nothing</Button>
                <p className="mt-3 ml-3">From: {mail.recieverEmail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>

  );

}

export default Inbox;