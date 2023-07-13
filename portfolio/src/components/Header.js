import React, { useState } from 'react';
import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { Nav } from 'react-bootstrap';

const Header = () => {
  const [activeSection, setActiveSection] = useState('About');

  const handleNavigationClick = (section) => {
    console.log('Clicked on:', section);
    setActiveSection(section);
  };

  return (
    <header>
      <h1 style={{ color: pink }}>Gabriela M. Ortiz</h1> {/* Developer's name */}
      {/* Navigation component */}
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link
            className={activeSection === 'About' ? 'active' : ''}
            onClick={() => handleNavigationClick('About')}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={activeSection === 'Portfolio' ? 'active' : ''}
            onClick={() => handleNavigationClick('Portfolio')}
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={activeSection === 'Contact' ? 'active' : ''}
            onClick={() => handleNavigationClick('Contact')}
          >
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={activeSection === 'Resume' ? 'active' : ''}
            onClick={() => handleNavigationClick('Resume')}
          >
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* Render content based on activeSection */}
      {activeSection === 'About' && <About />}
      {activeSection === 'Portfolio' && <Portfolio />}
      {activeSection === 'Contact' && <Contact />}
      {activeSection === 'Resume' && <Resume />}
    </header>
  );
};

export default Header;