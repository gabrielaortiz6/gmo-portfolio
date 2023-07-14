import React from 'react';
import { Card } from 'react-bootstrap';
import { darkPurple } from '../colors';

const AboutMe = () => {
  return (
    <section>
      <Card body className="mb-3 border-0" style={{backgroundColor: darkPurple}}>
        <Card.Img variant="top" className="mb-3" src="path/to/image.jpg" alt="About Me Image" />
        <Card.Text style={{ textAlign: 'left' }}>
          <p>
            Born in Cuba, raised in Miami, Fl, based in PVD, RI. </p>
            <p>Background in media theory and media production (text, visual, time-based)
            from Brown University. </p>
           <p> Lover of puzzles and cats.
          </p>
        </Card.Text>
      </Card>
    </section>
  );
};

export default AboutMe;