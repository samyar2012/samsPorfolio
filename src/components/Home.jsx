import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiBootstrap } from 'react-icons/si';
import { AiOutlineArrowUp } from 'react-icons/ai';

const lightTheme = {
  bodyBg: '#ffffff',
  bodyColor: '#000000',
  navBg: '#f8f9fa',
  navLinkColor: '#343a40',
  navLinkHover: '#007bff',
  projectBg: '#ffffff',
  testimonialBg: '#f8f9fa',
  testimonialTextColor: '#343a40',
  contactFormBg: '#ffffff',
  footerBg: '#f8f9fa',
  footerColor: '#343a40',
  socialIconColor: '#343a40',
  scrollbarTrack: '#f8f9fa',
  scrollbarThumb: '#343a40',
};

const darkTheme = {
  bodyBg: '#121212',
  bodyColor: '#e0e0e0',
  navBg: '#1f1f1f',
  navLinkColor: '#e0e0e0',
  navLinkHover: '#58a6ff',
  projectBg: '#1f1f1f',
  testimonialBg: '#1f1f1f',
  testimonialTextColor: '#e0e0e0',
  contactFormBg: '#1f1f1f',
  footerBg: '#1f1f1f',
  footerColor: '#e0e0e0',
  socialIconColor: '#e0e0e0',
  scrollbarTrack: '#1f1f1f',
  scrollbarThumb: '#58a6ff',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.bodyBg};
    color: ${(props) => props.theme.bodyColor};
    transition: all 0.3s ease-in-out;
    overflow-x: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollbarThumb};
    border-radius: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: ${(props) => props.theme.navBg};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.navLinkColor};
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.navLinkHover};
  }
`;

const HomeWrapper = styled.div`
  margin-top: 80px;
  padding: 0 20px;
`;

const Header = styled.header`
  text-align: center;
  padding: 100px 0;
  background: url('path/to/your/background-image.jpg') no-repeat center center/cover;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #58a6ff;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid;
  width: 22ch;
  margin: 0 auto;
  
  @keyframes typing {
    from { width: 0 }
    to { width: 22ch }
  }

  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: #58a6ff }
  }
`;

const Section = styled.section`
  padding: 60px 0;
  text-align: center;
`;

const AboutMeTitle = styled.h2`
  font-size: 2.5rem;
  color: #58a6ff;
  margin-bottom: 20px;
`;

const AboutMeText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Project = styled.div`
  background: ${(props) => props.theme.projectBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Skills = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  width: 200px;
  margin: 10px;
`;

const TechnologySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`;

const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

const TechnologyIcon = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.bodyColor};
  margin-bottom: 10px;
`;

const TechnologyName = styled.p`
  font-size: 1rem;
`;

const Testimonials = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: ${(props) => props.theme.testimonialBg};
  padding: 20px;
  border-radius: 10px;
`;

const Testimonial = styled.div`
  max-width: 300px;
  margin: 10px;
  font-size: 1rem;
  color: ${(props) => props.theme.testimonialTextColor};
`;

const TestimonialText = styled.p`
  font-style: italic;
`;

const ContactForm = styled(Form)`
  max-width: 600px;
  margin: 0 auto;
  background: ${(props) => props.theme.contactFormBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const ContactButton = styled(Button)`
  background-color: #58a6ff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }
`;

const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  background: ${(props) => props.theme.footerBg};
  color: ${(props) => props.theme.footerColor};
`;

const SocialIcons = styled.div`
  margin-bottom: 10px;

  a {
    color: ${(props) => props.theme.socialIconColor};
    margin: 0 10px;
    font-size: 1.5rem;
  }
`;

const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #58a6ff;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #007bff;
  }
`;

const Home = () => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.getElementById('scrollToTopButton');
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#technologies">Technologies</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <HomeWrapper>
          <Header>
            <Title>Welcome to My Portfolio</Title>
            <Subtitle>Samyar Shirazi </Subtitle>
          </Header>
          <Section id="about">
            <Fade triggerOnce>
              <AboutMeTitle>About Me</AboutMeTitle>
              <Avatar src="path/to/your/avatar.jpg" alt="My Avatar" />
              <AboutMeText>
                Hi! I'm a young and passionate web developer with 1-2 years of experience. I love building beautiful and functional websites. I'm always eager to learn and take on new challenges.
              </AboutMeText>
            </Fade>
          </Section>
          <Section id="projects">
            <Slide triggerOnce>
              <h2>Projects</h2>
              <Projects>
                <Project>
                  <ProjectTitle>Project One</ProjectTitle>
                  <ProjectDescription>This is a brief description of my first project.</ProjectDescription>
                </Project>
                <Project>
                  <ProjectTitle>Project Two</ProjectTitle>
                  <ProjectDescription>This is a brief description of my second project.</ProjectDescription>
                </Project>
              </Projects>
            </Slide>
          </Section>
          <Section id="skills">
            <Slide triggerOnce>
              <h2>Skills</h2>
              <Skills>
                <Skill>
                  <FaHtml5 size={50} color="#e34c26" />
                  <p>HTML5</p>
                </Skill>
                <Skill>
                  <FaCss3Alt size={50} color="#1572b6" />
                  <p>CSS3</p>
                </Skill>
                <Skill>
                  <SiJavascript size={50} color="#f7df1e" />
                  <p>JavaScript</p>
                </Skill>
                <Skill>
                  <FaReact size={50} color="#61dafb" />
                  <p>React</p>
                </Skill>
                <Skill>
                  <FaNodeJs size={50} color="#68a063" />
                  <p>Node.js</p>
                </Skill>
                <Skill>
                  <SiMongodb size={50} color="#47a248" />
                  <p>MongoDB</p>
                </Skill>
                <Skill>
                  <SiBootstrap size={50} color="#563d7c" />
                  <p>Bootstrap</p>
                </Skill>
              </Skills>
            </Slide>
          </Section>
          <Section id="technologies">
            <Fade triggerOnce>
              <h2>Technologies I Work With</h2>
              <TechnologySection>
                <Technology>
                  <TechnologyIcon>
                    <FaHtml5 />
                  </TechnologyIcon>
                  <TechnologyName>HTML5</TechnologyName>
                </Technology>
                <Technology>
                  <TechnologyIcon>
                    <FaCss3Alt />
                  </TechnologyIcon>
                  <TechnologyName>CSS3</TechnologyName>
                </Technology>
                <Technology>
                  <TechnologyIcon>
                    <SiJavascript />
                  </TechnologyIcon>
                  <TechnologyName>JavaScript</TechnologyName>
                </Technology>
                <Technology>
                  <TechnologyIcon>
                    <FaReact />
                  </TechnologyIcon>
                  <TechnologyName>React</TechnologyName>
                </Technology>
                <Technology>
                  <TechnologyIcon>
                    <FaNodeJs />
                  </TechnologyIcon>
                  <TechnologyName>Node.js</TechnologyName>
                </Technology>
                <Technology>
                  <TechnologyIcon>
                    <SiMongodb />
                  </TechnologyIcon>
                  <TechnologyName>MongoDB</TechnologyName>
                </Technology>
                <Technology>
                  <TechnologyIcon>
                    <SiBootstrap />
                  </TechnologyIcon>
                  <TechnologyName>Bootstrap</TechnologyName>
                </Technology>
              </TechnologySection>
            </Fade>
          </Section>
          <Section id="testimonials">
            <Fade triggerOnce>
              <h2>Testimonials</h2>
              <Testimonials>
                <Testimonial>
                  <TestimonialText>"Great developer! Very dedicated and skilled."</TestimonialText>
                </Testimonial>
                <Testimonial>
                  <TestimonialText>"Highly recommended! Delivers quality work on time."</TestimonialText>
                </Testimonial>
              </Testimonials>
            </Fade>
          </Section>
          <Section id="contact">
            <Fade triggerOnce>
              <h2>Contact Me</h2>
              <ContactForm>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>
                <ButtonWrapper>
                  <ContactButton variant="primary" type="submit">Submit</ContactButton>
                </ButtonWrapper>
              </ContactForm>
            </Fade>
          </Section>
          <Footer>
            <SocialIcons>
              <a href="https://github.com/samyar2012" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/samyar-shirazi-569699292/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com/SamnotFoundin" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="samyar.life1391@gmail.com"><FaEnvelope /></a>
            </SocialIcons>
            <p>&copy; 2024 Samyar Shirazi . All Rights Reserved.</p>
          </Footer>
        </HomeWrapper>
        <ScrollToTopButton id="scrollToTopButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <AiOutlineArrowUp size={20} />
        </ScrollToTopButton>
      </ThemeProvider>
    </>
  );
};

export default Home;
