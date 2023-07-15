import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Report.css"; // Import the CSS file

const Report = (props) => {
  const [displayText, setDisplayText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setDisplayText("Searching clouds...");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      setDisplayText("Analyzing clouds...");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setDisplayText("Looking outside your window...");
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setDisplayText("Gathering weather information...");
      }, 7000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setDisplayText("Best you can check it outside by yourself😂");
      }, 9000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  const handleButtonClick = () => {
    props.click();
    setIsLoading(true);
    setDisplayText("");
  };

  return (
    <Container className="border border-dark rounded" style={{ maxWidth: '500px' }}>
      <div className="d-flex flex-row justify-content-between p-2">
        <h4 className="weather-report-heading">Weather Report</h4>
        <Button className="d-flex justify-content-end" onClick={handleButtonClick}>X</Button>
      </div>
      <div className={`weather-report-content border border-dark p-2 my-2 rounded`}>
        <h5 className="mx-2">{displayText}</h5>
      </div>
    </Container>
  );
};

export default Report;
