import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>I am currently enrolled in a certificate program in full stack development from the
					University of Arizona Boot Camp  I've developed skills with JavaScript, CSS, React.js, graphql,
          mongoose and other backend skills.  I am also a U.S. Army veteran with over 20 years
          of Military Service.  I have experience working with small and large teams.  Also have 
          experience in project management. 

        </p>
      </div>
    </section>
  );
}

export default About;
