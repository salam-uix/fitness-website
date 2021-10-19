import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-4">Our Galler</h1>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/zsfbRY3/gallery01.jpg" />
                        {/* <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body> */}
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/rGj08kk/gallery02.jpg" />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/Y8PbGcf/gallery03.jpg" />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/Cm5ZgMs/gallery04.jpg" />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/7JhZJqV/gallery05.jpg" />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/Hx9RzMw/gallery06.jpg" />

                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Gallery;