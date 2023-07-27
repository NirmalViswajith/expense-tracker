import React, { Fragment } from 'react'
import './StoreData.css'
import Store from './Store';

const StoreData = () => {


    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ];

        const data= productsArr.map((item, inx)=>(
            <Store key={inx} title={item.title} price={item.price} imageUrl={item.imageUrl} />
        ))


  return (
    <Fragment>
<div className='store-data-main-div'>

        {data}
</div>

    </Fragment>
  )
}

// export default StoreData



// <div className='store-main-div'>
// <div className='store-heading'>
//     Music
// </div>
// <div className='store-card'>


// <Row xs={1} md={2} className="g-4">
// {productsArr.map((item, idx) => (
// <Col className='store-cards-row'>

// {/* <div className='store-card-div'> */}
// <Card.Title className='store-card-title'>{item.title}</Card.Title>
// <Card>
// <Card.Img variant="top" src={item.imageUrl} />
// <Card.Body>
//   {/* <Card.Title>Card title</Card.Title> */}
//   <Card.Text className='store-card-description'>
//    <div>${item.price}</div>
//    <div>
   
//    <Button variant="primary" onClick={addToCartHandler}>ADD TO CART</Button>

//    </div>
//   </Card.Text>
// </Card.Body>
// </Card>
// {/* </div> */}

// </Col>
// ))}
// </Row>


// </div>
// </div>