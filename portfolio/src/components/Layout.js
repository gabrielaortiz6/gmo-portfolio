// import React from 'react';
// import Header from './Header';
// import Navigation from './Navigation';
// import Footer from './Footer';

// const Layout = ({ activeSection, handleNavigationClick, children }) => {
//   return (
//     <div>
//       <Header />
//       <Navigation activeSection={activeSection} handleNavigationClick={handleNavigationClick} />
//       {children}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('About');

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Header activeSection={activeSection} handleNavigationClick={handleNavigationClick} />
      {/* Render content based on activeSection */}
      {activeSection === 'About' && <About />}
      {activeSection === 'Portfolio' && <Portfolio />}
      {activeSection === 'Contact' && <Contact />}
      {activeSection === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
};

// const Layout = ({ activeSection, handleNavigationClick }) => {
//   const renderSection = () => {
//     switch (activeSection) {
//       case 'About':
//         return <About />;
//       case 'Portfolio':
//         return <Portfolio />;
//       case 'Contact':
//         return <Contact />;
//       case 'Resume':
//         return <Resume />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <Header activeSection={activeSection} handleNavigationClick={handleNavigationClick} />
//       {renderSection()}
//       <Footer />
//     </div>
//   );
// };

export default Layout;