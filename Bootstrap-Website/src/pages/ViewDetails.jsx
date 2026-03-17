import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FaStar, FaShoppingCart, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const courses = [
    { id: 1, title: "UI/UX Design Book", price: 45.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-feature-1.png", rating: 5, description: "Master the art of User Interface and User Experience with this comprehensive guide covering wireframing, prototyping, and visual design." },
    { id: 2, title: "Software Development", price: 60.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-2.png", rating: 4, description: "Deep dive into modern software engineering principles, clean code practices, and scalable architecture." },
    { id: 3, title: "Digital Marketing", price: 30.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-3.png", rating: 5, description: "Learn how to grow brands online using SEO, PPC, and social media strategy." },
    { id: 4, title: "Self Managements", price: 30.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-3.png", rating: 5, description: "Self management course helps individuals develop discipline, time management, goal setting, and personal productivity skills" },
    { id: 5, title: "Application Development", price: 30.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-3.png", rating: 5, description: "Learn to design, build, test, and deploy modern software applications effectively." },
    { id: 6, title: "UI/UX Graphic Design", price: 30.00, img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-3.png", rating: 5, description: "Learn principles of UI/UX, create engaging visuals, and design user-friendly digital experiences." },

];

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const courseId = parseInt(id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return (
            <div style={{ marginTop: '150px', textAlign: 'center' }}>
                <h2>Course Not Found</h2>
                <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
            </div>
        );
    }

    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        if (!existingCart.find(item => item.id === course.id)) {
            localStorage.setItem('cart', JSON.stringify([...existingCart, course]));
            alert("Course added to cart!");
        } else {
            alert("This course is already in your cart!");
        }
    };

    return (
        <>
            <Breadcrumb title="Course Details" pageName={course.title} />

            <Container className="py-5">
                <Button variant="link" onClick={() => navigate(-1)} className="text-teal mb-4 p-0 text-decoration-none">
                    <FaArrowLeft /> Back to Courses
                </Button>

                <Row className="align-items-center">
                    <Col lg={6} className="text-center mb-4 mb-lg-0">
                        <div className="p-5 bg-light rounded-4 border">
                            <img src={course.img} alt={course.title} className="img-fluid" style={{ maxHeight: '400px' }} />
                        </div>
                    </Col>

                    <Col lg={6}>
                        <Badge bg="success" className="mb-3 px-3 py-2">Best Seller</Badge>
                        <h1 className="fw-bold mb-3">{course.title}</h1>

                        <div className="d-flex align-items-center mb-3">
                            <div className="text-warning me-2">
                                {[...Array(course.rating)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <span className="text-muted">(124 Student Reviews)</span>
                        </div>

                        <h2 className="text-teal fw-bold mb-4">${course.price.toFixed(2)}</h2>

                        <p className="text-muted mb-4 lead">
                            {course.description || "Detailed information about this course is coming soon. Stay tuned for curriculum updates and learning outcomes."}
                        </p>

                        <div className="mb-4">
                            <h5 className="fw-bold">Course Highlights:</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Comprehensive Industry Knowledge</li>
                                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Hands-on Practical Projects</li>
                                <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Lifetime Access & Certification</li>
                            </ul>
                        </div>

                        <div className="d-flex gap-3">
                            <Button variant="teal" size="lg" className="rounded-pill px-5 text-white shadow" onClick={handleAddToCart}>
                                <FaShoppingCart className="me-2" /> Enrol Now
                            </Button>
                            <Button variant="outline-dark" size="lg" className="rounded-pill px-4">
                                Wishlist
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default CourseDetails;