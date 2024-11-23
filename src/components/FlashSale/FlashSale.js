import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import './FlashSale.css';

const flashSaleItems = [
  { id: 1, name: 'In hóa đơn 1 liên', price: '29,900đ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXDxth4-dSn9IJonkJKO3QuNia07KaIttGg&s' },
  { id: 2, name: 'Tờ rơi giá rẻ', price: '1,000,000đ / 1000 tờ', image: 'https://intphcm.com/data/upload/in-to-roi.jpg' },
  { id: 3, name: 'In decal khổ lớn', price: '50,000đ / m2', image: 'https://insongphat.com/wp-content/uploads/2024/08/Tim-hieu-cac-loai-in-decal-kho-lon-tphcm-hien.jpg' },
  { id: 4, name: 'In bao thư nhỏ', price: '1,500đ / chiếc', image: 'https://innhanhhcm.vn/wp-content/uploads/2021/07/in-phong-bi-02.jpg' },
];

function FlashSale() {
  return (
    <section className="py-4 bg-light">
      <Container>
        <h3 className="mb-4">Flash Sale</h3>
        <Row>
          {flashSaleItems.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3} className="mb-3">
              <Card className="flash-sale-card">
                {/* Link to trang chi tiết sản phẩm */}
                <Link to={`/product/${item.id}`}>
                  <div className="flash-sale-badge">Flash Sale</div> {/* Thêm badge nháy */}
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <p className="text-danger">{item.price}</p>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FlashSale;
