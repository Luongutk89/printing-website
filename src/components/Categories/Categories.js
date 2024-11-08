import React from 'react';
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Categories.css';

const categories = [
  {
    name: 'Ấn phẩm văn phòng',
    options: ['Sổ tay', 'Bút', 'Giấy', 'Kẹp file', 'Máy in'],
    image: 'https://anhieuprint.com/wp-content/uploads/2023/12/bo-an-pham-van-phong.png',
    routePrefix: '/office'
  },
  {
    name: 'Ấn phẩm tiếp thị',
    options: ['Tờ rơi', 'Brochure', 'Poster', 'Băng rôn', 'Catalogue'],
    image: 'https://inhungphat.vn/wp-content/uploads/2023/09/An-pham-in-1024x512.jpg',
    routePrefix: '/marketing'
  },
  {
    name: 'Ấn phẩm bao bì',
    options: ['Hộp giấy', 'Túi giấy', 'Bao bì nhựa', 'Tem nhãn', 'Chai lọ'],
    image: 'https://inducdung.vn/wp-content/uploads/2023/10/bao-bi-1.png',
    routePrefix: '/packaging'
  },
  {
    name: 'Ấn phẩm khác',
    options: ['Sách', 'Tạp chí', 'Lịch', 'Thiệp chúc', 'Nhãn mác'],
    image: 'https://cdn.tcdulichtphcm.vn/upload/1-2024/images/2024-01-26/1706235359-dat-mua-bao-2024---2.jpg',
  },
];

function Categories() {
  const navigate = useNavigate(); // Hook to navigate

  const handleSelect = (categoryName, option) => {
    // Construct the route based on selected category and option
    const route = `${categoryName.toLowerCase().replace(/\s+/g, '-')}/${option.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(`/${route}`);  // Navigate to the constructed route
  };

  return (
    <section className="py-4">
      <Container>
        <h3 className="mb-4">Danh Mục Sản Phẩm</h3>
        <Row>
          {categories.map((category, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={category.image}
                  alt={category.name}
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id={`dropdown-${index}`}>
                      Chọn sản phẩm
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {category.options.map((option, optIndex) => (
                        <Dropdown.Item
                          key={optIndex}
                          onClick={() => handleSelect(category.routePrefix, option)} // Handle click to navigate
                        >
                          {`${category.name} - ${option}`}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
