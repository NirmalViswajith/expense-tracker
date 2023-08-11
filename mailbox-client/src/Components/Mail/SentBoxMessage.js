import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const SentBoxMessage = () => {
  const {id} = useParams();
  const sentBox = useSelector(state => state.mail.sentMails);
  const myEmail = localStorage.getItem('email').replace(/[@.]/g, '');
 
  
  const singleMail = sentBox.filter((mails) => mails.id === id);
  console.log(singleMail[0].message);

  return(
    <div>
      <Container className="border rounded shadow bg-light mt-5">
        <h1 className="text-xl font-bold">To:- </h1>
        <p className="ml-5">{singleMail[0].to}</p>
        <h2 className="text-xl">Subject:- </h2>
        <p className="ml-5">{singleMail[0].subject}</p>
        <h2 className="text-xl">Message:- </h2>
        <p className="ml-5">{singleMail[0].message}</p>
      </Container>
    </div>
  );
}

export default SentBoxMessage;
