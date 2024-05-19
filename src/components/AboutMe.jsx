// src/components/AboutMe.jsx

import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.section`
  padding: 50px 0;
  background-color: #1c1f24;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 20px 0;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const AboutMeTitle = styled.h3`
  color: #58a6ff;
  margin-bottom: 15px;
`;

const AboutMeText = styled.p`
  font-size: 1.2rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HighlightText = styled.span`
  color: #58a6ff;
  font-weight: bold;
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <AboutMeTitle>About Me</AboutMeTitle>
      <AboutMeText>
        Hello! I'm an <HighlightText>11-year-old web developer</HighlightText> I live  in America , Los Angles . With a keen interest in technology and a passion for coding, I have been honing my skills in web development for the past <HighlightText>1-2 years</HighlightText>. My journey started with a curiosity about how websites work, and soon I found myself immersed in the world of HTML, CSS, and JavaScript.
        <br /><br />
        I specialize in building responsive and dynamic web applications using <HighlightText>React.js</HighlightText>. I enjoy creating clean, efficient code and bringing ideas to life in the digital space. My projects range from personal blogs and weather apps to online stores, all showcasing my ability to adapt and learn new technologies quickly.
        <br /><br />
        Aside from coding, I am an avid gamer and love exploring new tech trends. I believe in continuous learning and am always looking for opportunities to expand my knowledge and improve my skills. My goal is to make a significant impact in the tech industry and inspire others with my work.
      </AboutMeText>
    </AboutMeWrapper>
  );
};

export default AboutMe;
