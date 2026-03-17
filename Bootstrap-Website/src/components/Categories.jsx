import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBolt, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const categories = [
    { id: 1, title: "UI/UX Design Service", img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-feature-1.png" },
    { id: 2, title: "Software Development", img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-2.png" },
    { id: 3, title: "Digital Marketing", img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-3.png" },
    { id: 4, title: "Self Managements", img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-4.png" },
    { id: 5, title: "Application Development", img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-5.png" },
    { id: 6, title: "UI/UX Graphic Design", img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-6.png" },
];

const CategorySection = () => {
    const navigate = useNavigate(); 


    const handleNavigation = () => {
        navigate('/shop');
    };

    return (
        <section className="pt-5 pb-5">
            <Container fluid className='category-section p-lg-5'>
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap">
                    <div className='mt-5'>
                        <div className="category-badge mb-2">
                            <FaBolt className="me-2 text-teal" /> Our Course Categories
                        </div>
                        <h2 className="text-white fw-bold display-5">Featured Courses</h2>
                    </div>
                    <Button
                        className="btn-browse-teal rounded-pill px-4 py-2 mt-3"
                        href='./Courses'
                    >
                        Browse All Courses <FaArrowRight className="ms-2" />
                    </Button>
                </div>

                {/* Categories Grid */}
                <Row className="g-4">
                    {categories.map((cat) => (
                        <Col xs={12} sm={6} md={4} lg={2} key={cat.id}>
                            <div
                                className="category-card shadow-sm text-center p-3"
                                onClick={handleNavigation} 
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="category-icon-circle mx-auto mb-3">
                                    <img src={cat.img} alt={cat.title} className="img-fluid" />
                                </div>
                                <h6 className="category-title mb-3">{cat.title}</h6>
                                <div className="category-arrow mx-auto">
                                    <FaArrowRight />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CategorySection;