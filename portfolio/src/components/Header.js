// import React, { useState } from 'react';
// import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';
// import Navigation from './Navigation';

// const Header = ({ activeSection, handleNavigationClick }) => {
//   return (
//     <header>
//       <h1 style={{ color: pink }}>Gabriela M. Ortiz</h1>{/* Developer's name */}
//       {/* Navigation component */}
//       <Navigation activeSection={activeSection} onNavigationClick={handleNavigationClick} />
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

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
      <nav>
        <ul>
          <li
            className={activeSection === 'About' ? 'active' : ''}
            onClick={() => handleNavigationClick('About')}
          >
            About
          </li>
          <li
            className={activeSection === 'Portfolio' ? 'active' : ''}
            onClick={() => handleNavigationClick('Portfolio')}
          >
            Portfolio
          </li>
          <li
            className={activeSection === 'Contact' ? 'active' : ''}
            onClick={() => handleNavigationClick('Contact')}
          >
            Contact
          </li>
          <li
            className={activeSection === 'Resume' ? 'active' : ''}
            onClick={() => handleNavigationClick('Resume')}
          >
            Resume
          </li>
        </ul>
      </nav>
      {/* Render content based on activeSection */}
      {activeSection === 'About' && <About />}
      {activeSection === 'Portfolio' && <Portfolio />}
      {activeSection === 'Contact' && <Contact />}
      {activeSection === 'Resume' && <Resume />}
    </header>
  );
};

export default Header;