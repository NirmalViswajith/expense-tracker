import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const MyForm = (props) => {
  const [title, setTitle] = useState("");
  const [textcrawl, setTextCrawl] = useState("");
  const [date, setdate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const textAreaHandler = (event) => {
    setTextCrawl(event.target.value);
  };

  const dateHandler = (event) => {
    setdate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const movie = {
      title: title,
      release_date: date,
      opening_crawl: textcrawl,
    };
    props.addMovie(movie);
    setTitle("");
    setTextCrawl("");
    setdate("");
  };

  return (
    <Container className="border border-dark rounded bg-light my-4 p-2">
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={titleHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Opening Text:</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            row={8}
            value={textcrawl}
            onChange={textAreaHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Release Date:</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={dateHandler}
          ></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="outline-dark" className="my-4">
            Add Movies
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default MyForm;
