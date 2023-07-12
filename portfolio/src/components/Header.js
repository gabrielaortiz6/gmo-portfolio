import React, { useState } from 'react';
import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';
import Navigation from './Navigation';

const Header = ({ activeSection, handleNavigationClick }) => {
  return (
    <header>
      <h1 style={{ color: pink }}>Gabriela M. Ortiz</h1>{/* Developer's name */}
      {/* Navigation component */}
      <Navigation activeSection={activeSection} onNavigationClick={handleNavigationClick} />
    </header>
  );
};

export default Header;

