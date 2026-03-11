import React from 'react';
import Card from './Components/Card';
import './App.css';
import reactImg from './assets/images/react-img.png'
import javaScriptImg from './assets/images/js-img.png'
import uiImg from './assets/images/ui-img.png'



function App() {
  return (
    <div className="app-container">
      <h1>Featured Courses</h1>
      <div className="card-grid">
        <Card
          title="React for Beginners"
          description="Build dynamic user interfaces using React fundamentals like components, props, and hooks."
          image={reactImg}
          buttonText="Learn React"
        />
        <Card
          title="Advanced JavaScript"
          description="Strengthen your JavaScript skills by mastering advanced concepts and modern ES features."
          image={javaScriptImg}
          buttonText="Get Started"
        />
        <Card
          title="UI/UX Design"
          description="Design intuitive, user-friendly interfaces with a focus on usability and accessibility."
          image={uiImg}
          buttonText="Explore Design"
        />
      </div>
    </div>
  );
}

export default App;