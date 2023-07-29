import React, { Fragment, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cartContext from "../../Conrext-store/CartContext";
import "./Store.css";

const Store = (props) => {
  const ctx = useContext(cartContext);

  const productsArr = [
    {
      id: "a1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "a2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "a3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "a4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const addToCartHandler = (title, price, img, i) => {
    ctx.addToCart({
      title: title,
      price: price,
      imageUrl: img,
      id: i,
    });
    console.log(ctx.emailOfUser);
  };

  return (
    <Fragment>
      <div className="store-main-div">
        <div className="store-heading">Music</div>
        <div className="store-card">
          <Row xs={1} md={2} className="g-4">
            {productsArr.map((item) => (
              <Col className="store-cards-row" key={item.id} id={item.id}>
                {/* <div className='store-card-div'> */}
                <Card.Title className="store-card-title">
                  {item.title}
                </Card.Title>
                <Card>
                  <NavLink to={`/singleproduct/${item.id}`}>
                    <Card.Img variant="top" src={item.imageUrl} />
                  </NavLink>
                  <Card.Body>
                    <Card.Text className="store-card-description">
                      <div>${item.price}</div>
                      <div>
                        <Button
                          variant="primary"
                          onClick={addToCartHandler.bind(
                            null,
                            item.title,
                            item.price,
                            item.imageUrl,
                            item.id
                          )}
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                {/* </div> */}
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Store;
