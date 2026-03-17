import React from 'react';
import Instructor from "../components/Instructor";
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const InstructorPage = ()  => {

    const Instructors = [
        {
            name: 'William Samuel',
            role: 'Instructor',
            img: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-5.png',
            theme: 'green'
        },
        {
            name: 'Olivia Sophia',
            role: 'Instructor',
            img: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-6.png',
            theme: 'orange'
        },
        {
            name: 'Jacob Mason',
            role: 'Instructor',
            img: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-7.png',
            theme: 'blue'
        },
        {
            name: 'Isabella Grace',
            role: 'Instructor',
            img: 'https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-8.png',
            theme: 'brown'
        },
    ];

    return(
        <>
            <Breadcrumb title="Instructor" pageName="Instructor" />
            <Instructor/>
            <br></br>
            <Footer/>
        </>
    )
}
export default InstructorPage