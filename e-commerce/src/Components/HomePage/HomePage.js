import { Button , Row, Col } from "react-bootstrap";

const HomePage = () => {
  const tours = [
    {
      id: 'e1',
      date: "july 16",
      place: "Detroit,MI",
      description: 'DTE ENERGY MUSIC THEATRE'
    },
    {
      id: 'e2',
      date: "july 16",
      place: "Toronto,ON",
      description: 'BUDWEISER STAGE'
    },
    {
      id: 'e1',
      date: "july 22",
      place: "Bristow, VA",
      description: 'JIGGY LUBE LIVE'
    },
  ];
  const tourList = tours.map((tours) => (
    <li >
      <Row >
        <Col>{tours.date}</Col>
        <Col>{tours.place}</Col>
        <Col>{tours.description}</Col>
        <Col><Button disabled>BUY TICKETS</Button></Col>
        <hr className="my-2"/>
      </Row>
    </li>
  ))
  return (
    <div>
      <div className="bg-stone p-5 text-center">
        <Button variant="outline-dark" className="mr-3">
          Get Our Latest Album
        </Button>
        <Button variant="outline-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </Button>
      </div>
      <div className="p-5 text-center">
        <h3>Tours</h3>
        <ul>{tourList}</ul>
      </div>
    </div>
  );
};

export default HomePage;
