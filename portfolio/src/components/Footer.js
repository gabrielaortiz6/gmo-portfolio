import React from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faGithub, faLinkedin, faExternalLinkAlt } from '@fontawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import '../Footer.css';
import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <a href="https://github.com/your-github-profile" style={{ color: textColor }} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/your-linkedin-profile" style={{ color: textColor }} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Col>
          <Col>
            <a href="https://www.your-external-link.com" style={{ color: textColor }} target="_blank" rel="noopener noreferrer">
              External Link
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;