import React from 'react';
import Categories from "../components/Categories";
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const CoursePage = () => {

    const courses = [
        {
            id: 1,
            instructor: "Kevin Perry",
            title: "UI/UX Design Service",
            lessons: 12,
            students: 0,
            rating: 0,
            price: 79.00,
            img: "./public/images/img-1.png",
        },
        {
            id: 2,
            instructor: "Kevin Perry",
            title: "Software Development",
            lessons: 12,
            students: 0,
            rating: 0,
            price: 120.00,
            img: "./public/images/img-2.png",
        },
        {
            id: 3,
            instructor: "Kevin Perry",
            title: "Digital Marketing",
            lessons: 14,
            students: 0,
            rating: 0,
            price: 99.00,
            img: "./public/images/img-3.png",
        },
        {
            id: 4,
            title: "Self Managments",
            lessons: 14,
            students: 0,
            rating: 0,
            price: 80.00,
            img: "./public/images/img-4.png",
        },
        {
            id: 5,
            title: "Application Development",
            lessons: 14,
            students: 0,
            rating: 0,
            price: 100.00,
            img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-5.png"
        },
        {
            id: 6,
            title: "UI/UX Graphic Design",
            lessons: 14,
            students: 0,
            rating: 0,
            price: 90.00,
            img: "https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/feature-6.png"
        }
    ];
    return (
        <>
            <Breadcrumb title="Our Courses" pageName="Courses" />
            <Categories />
            <br></br>
            <br></br>
            <Footer />
        </>
    )
}
export default CoursePage