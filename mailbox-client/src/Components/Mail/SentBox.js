import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MailAction } from "../ReduxStore/AuthReducer";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SentBox = () => {
  const myEmail = localStorage.getItem('email').replace(/[@.]/g,'');
  const dispatch = useDispatch();
  const sentBox = useSelector(state => state.mail.sentMails);
  const [reRender, setreRender] = useState(true);

  
    const deleteHandler = async (id) => {
      try{
        const response = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/sentBox/${myEmail}/${id}.json`,{
          method: 'DELETE'
        })
        const data = await response.json();
        setreRender(prev => !prev);
      } catch(error) {
        console.log(error);
      }
    }
  
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch(`https://mailbox-client-e7886-default-rtdb.firebaseio.com/sentBox/${myEmail}.json`);
        const data = await response.json();
        const myData = [];
        for(let key in data){
          myData.push({id:key,...data[key]});
        }
        dispatch(MailAction.updateSentBox(myData));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[reRender])
  return(
    <div>
      <Container>
        <h1>Sent Box</h1>
        <div style={{maxWidth: '6--px'}}>
          <ul>
          {sentBox.map((mail) => (
    <li className='d-flex align-items-center border rounded bg-light decoration-none mb-2' key={mail.id}>
      <Button variant="success" className="ml-2"></Button>
      <Link to={`/sentMessage/${mail.id}`} className="text-decoration-none text-dark"><p className=" mt-3 ml-3" >From: {mail.myEmail}</p></Link>
      <Button variant="danger" className="ml-auto mr-3" onClick={() => deleteHandler(mail.id)}>Delete</Button>
    </li>
  ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default SentBox;