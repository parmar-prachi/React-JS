import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/images/slide1.png'
import img2 from '../assets/images/slide2.png'
import { Link } from "react-router-dom";

function Home({ books }) {

    return (
        <>
            {/* section 1 */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Slide 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Slide 2"
                    />
                </Carousel.Item>
            </Carousel>

            {/* section 2 */}

            <Container fluid className="book-section mt-5">
                <Container>
                    <h2 className="text-center mb-4">Our Books</h2>

                    <Row>
                        {books.map((book) => (
                            <Col md={4} className="mb-4" key={book.b_id}>
                                <Card className="h-100 h-100 book-card">

                                    {/* Book Image */}
                                    <Card.Img
                                        variant="top"
                                        src={book.image}
                                        style={{ height: "400px", objectFit: "cover" }}
                                    />

                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>

                                        <Card.Text>
                                            <strong>Author:</strong> {book.author} <br />
                                            <strong>Price:</strong> ₹{book.price}
                                        </Card.Text>

                                        {/* Short Description */}
                                        <Card.Text style={{ fontSize: "14px" }}>
                                            {book.des.substring(0, 120)}...
                                        </Card.Text>

                                        <Link
                                            to={`/details/${book.b_id}`}
                                            className="custom-btn"
                                        >
                                            View Details
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Home;