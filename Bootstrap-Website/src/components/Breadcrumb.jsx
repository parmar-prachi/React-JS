import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, pageName }) => {
    return (
        <section className="breadcrumb-wrapper">
                {/* <img src="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/bg-img/page-header-bg.png"/> */}
            <Container>
                <div className="breadcrumb-content">
                    <div className="title-section">
                        <h1 className="breadcrumb-title">{title}</h1>
                    </div>

                    <nav className="breadcrumb-nav">
                        <Link to="/" className="home-link">Home</Link>
                        <span className="separator">/</span>
                        <span className="current-page">{pageName}</span>
                    </nav>
                </div>
            </Container>
        </section>
    );
};

export default Breadcrumb;