import React, { useState } from 'react';
import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';

// const Navigation = ({ activeSection, onNavigationClick }) => {
//   // const [activeSection, setActiveSection] = useState('AboutMe');

//   const handleNavigationClick = (section) => {
//     onNavigationClick(section);
//   };

//   return (
//     <nav>
//       <ul>
//         <li
//           className={activeSection === 'About' ? 'active' : ''}
//           onClick={() => handleNavigationClick('AboutMe')}
//         >
//           About
//         </li>
//         <li
//           className={activeSection === 'Portfolio' ? 'active' : ''}
//           onClick={() => handleNavigationClick('Portfolio')}
//         >
//           Projects
//         </li>
//         <li
//           className={activeSection === 'Contact' ? 'active' : ''}
//           onClick={() => handleNavigationClick('Contact')}
//         >
//           Contact
//         </li>
//         <li
//           className={activeSection === 'Resume' ? 'active' : ''}
//           onClick={() => handleNavigationClick('Resume')}
//         >
//           Resume
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;

const Navigation = ({ activeSection, onNavigationClick }) => {
  const handleNavigationClick = (section) => {
    if (activeSection !== section) { // Check if the clicked section is different from the active section
      onNavigationClick(section);
    }
  };

  return (
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
          Projects
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
  );
};

export default Navigation;