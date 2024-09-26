import React, { useState } from 'react';
import clsuLogo from '../Assets/CLSU_logo.png';
import wesleyanLogo from '../Assets/WUPLOGO.png';
import manhsLogo from '../Assets/MANHSLOGO.png';
import macsLogo from '../Assets/MACSLOGO.png';
function AboutMe() {
    const [educationList] = useState([
        { name: 'Central Luzon State University', level: 'College', description: 'A state university in the Philippines, known for its excellence in agricultural sciences, research, and technology, contributing significantly to national development and innovation..', image: clsuLogo, link: 'https://clsu.edu.ph/' },
        { name: 'Wesleyan University-Philippines - Aurora Campus', level: 'Senior High', description: 'A private educational institution known for its strong academic programs and community involvement, providing quality education to students in the Aurora region..', image: wesleyanLogo, link: 'https://www.wesleyan.edu.ph/aurora-campus/' },
        { name: 'Maria Aurora National High School', level: 'Junior High', description: 'A public educational institution in Aurora, committed to providing quality secondary education and fostering student development through academic and extracurricular activities.', image: manhsLogo, link: 'https://www.facebook.com/p/Maria-Aurora-National-High-School-formerly-ANAS-100068269551921/?paipv=0&eav=Afb2QESQwpXlwcbmaJDM7i47mxcV41vILaUOV0aD4OIueadX-AM8lXw9fcpuHDApBMI&_rdr' },
        { name: 'Maria Aurora Central School', level: 'Elementary', description: 'A public elementary school in Aurora, dedicated to nurturing young learners with a strong foundation in academics, values, and holistic development.', image: macsLogo, link: 'https://www.facebook.com/MaAuroraCentralSchool/' }
    ]);

    return (
        <div className="AboutMe-container">
            <section className="aboutMe-section">
                <h2>About Me</h2>
                <div className="aboutMe-content">
                    <p className="aboutMe-intro">I'm <span>John Vincent Macayanan</span></p>
                    <p className="aboutMe-description">
                        An aspiring software developer and a current Bachelor of Science in Information Technology (BSIT) student.
                    </p>
                    <p className="aboutMe-description"> I am continuously learning and honing my skills in software development to tackle real-world challenges and build applications.</p>
                </div>
            </section>



            <section className="Background-section">
                <h2>Background Education</h2>
                <div className="education-list">
                    {educationList.map((education, index) => (
                        <div key={index} className="education-card">
                            <img src={education.image} alt={`${education.name} logo`} className="education-image" />
                            <h3>{education.name}<h4>{education.level} Level</h4></h3>

                            <p>{education.description}</p>
                            {education.link && <a href={education.link} className="education-link" target="_blank" rel="noopener noreferrer">View School</a>}
                        </div>
                    ))}
                </div>
            </section>

            {/* <section className="Hobies-section">
                <h2>Hobbies & Interests</h2>
                <ul>

                </ul>
            </section> */}


        </div>
    );

}

export default AboutMe;
