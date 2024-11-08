import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FlashSale.css';

const flashSaleItems = [
  { name: 'In hóa đơn 1 liên', price: '29,900đ', image: 'https://magiamgiashopee.vn/wp-content/uploads/2023/09/Anh-6.jpg' }, // Replace with your image paths
  { name: 'Tờ rơi giá rẻ', price: '1,000,000đ / 1000 tờ', image: 'https://magiamgiashopee.vn/wp-content/uploads/2023/09/Anh-6.jpg' },
  { name: 'In decal khổ lớn', price: '50,000đ / m2', image: 'https://magiamgiashopee.vn/wp-content/uploads/2023/09/Anh-6.jpg' },
  { name: 'In bao thư nhỏ', price: '1,500đ / chiếc', image: 'https://magiamgiashopee.vn/wp-content/uploads/2023/09/Anh-6.jpg' },
];

function FlashSale() {
  return (
    <section className="py-4 bg-light">
      <Container>
        <h3 className="mb-4">Flash Sale</h3>
        <Row>
          {flashSaleItems.map((item, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <p className="text-danger">{item.price}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FlashSale;
