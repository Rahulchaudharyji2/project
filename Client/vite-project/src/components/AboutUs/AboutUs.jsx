import React from "react";
import "./AboutUs.css"; // Optional: Link to a CSS file for styling
import image1 from "./images/image1.avif";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          Empowering Students to Bring Their Ideas to Life
        </p>
      </header>

      <section className="about-content">
        <div className="container-fluid">
          <h2>Our Mission</h2>
          <p>
            Our platform is designed to help students manage and showcase their
            projects, acting as a central hub for collaboration, progress tracking,
            and resource sharing. Whether you're working on a small idea or a large-scale project, our platform supports you from conception to completion.
          </p>
          
          <div className="container d-flex flex-row" id="part">
            <div className="container-fluid" id="pl">
              <h2>Why We Exist</h2>
              <p>
                We believe that students have the potential to solve real-world problems
                with creativity and innovation. But bringing ideas to fruition can be
                challenging without the right tools. That's why we built this platform: to
                provide students with a collaborative environment where they can stay
                organized, track their progress, and access resources to push their projects
                to success.
              </p>
              <h2>What We Offer</h2>
              <ul>
                <li><strong>Collaboration:</strong> Connect and collaborate with your peers and mentors.</li>
                <li><strong>Progress Tracking:</strong> Manage tasks, set milestones, and visualize your project’s journey.</li>
                <li><strong>Resource Sharing:</strong> Upload and access shared files, documentation, and learning resources.</li>
                <li><strong>Showcase:</strong> Highlight your achievements with a portfolio feature that allows you to display your completed projects.</li>
              </ul>
            </div>
            <div className="container-fluid">
              <img id="img1" src={image1} alt="AboutUs"/>
            </div>
          </div>
          <h2>Join Us</h2>
          <p>
            We’re here to help students take control of their projects, streamline
            their workflows, and make the most of their ideas. Join us today and be a
            part of a community that brings innovation to life!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;