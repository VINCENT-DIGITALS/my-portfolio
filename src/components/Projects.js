import React, { useState } from 'react';

function SkillsProjects() {
  const skills = ['HTML', 'CSS', 'PHP','C', 'JavaScript', 'React', 'Node.js', 'Flutter','Dart', 'Firebase', 'Git', 'SQL', 'VSCode', 'Sublime', 'Android Studio', 'FlutterFlow', 'Canva', 'MS Suite'];
    
  const [projectList] = useState([
    { name: 'CIPHER E-commerce App', description: 'Developed a functional e-commerce app, CIPHER, using FlutterFlow and Firebase.', link: 'https://github.com/VINCENT-DIGITALS/CIPHER' },
    { name: 'Firefly Movie Booking System', description: 'A PHP-based movie booking system with database integration using PHPMyAdmin.', link: 'https://github.com/VINCENT-DIGITALS/Fireflix' },
    { name: 'Restaurant Website', description: 'A web-based project to display a restaurant menu and services.', link: 'https://github.com/VINCENT-DIGITALS/GRILLEDEC' }
  ]);

  return (
    <div className="skills-projects-container">
      <section className="skills-section">
        <h2>Skills and Technologies</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.link && <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SkillsProjects;
