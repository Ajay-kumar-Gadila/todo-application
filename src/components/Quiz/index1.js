
import './index1.css';
import React from "react";
import { Navigate } from "react-router-dom";

function Quiz() {
  const [goToContact, setGoToContact] = React.useState(false);

  if (goToContact) {
    return <Navigate to="/signup" />;
  }

  return (
    <div className="container">
      <div className="main">
        <header className="h-01">
          <div className="logo">
            <h1>Quiz</h1>
          </div>
          <div className="nav-ele">
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
            </ul>
          </div>
        </header>
      </div>
      <section className="description">
        <p className="text-p">
          Welcome to the JavaScript Quiz! This quiz will challenge your
          understanding of JavaScript,
          <br /> the versatile and powerful programming language used to create dynamic and interactive
          <br /> websites. JavaScript is a core component of web development and allows developers to add functionality,
          <br /> interactivity, and behavior to web pages. So, let's dive in and test your JavaScript skills!
        </p>
         <button className="button-01"  onClick={() => {
          setGoToContact(true);
        }}>Continue</button> 
         {/* <Link to="/Signup"> GO TO THE ABOUT PAGE </Link> } */}
      </section>
    </div>
  );
}

export default Quiz;
