import React from 'react';
import { Card } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <section>
      {/* About Me content */}
      <h1>About Me</h1>
      <Card body className="mb-3">
        <Card.Img variant="top" src="path/to/image.jpg" alt="About Me Image" />
        <Card.Text style={{ textAlign: 'left' }}>
          <p>
            Born in Cuba, raised in Miami, Fl, based in PVD, RI.
            Background in media theory and media production (text, visual, time-based)
            from Brown University
            Lover of puzzles and sudoku and cats.
          </p>
        </Card.Text>
      </Card>
    </section>
  );
};

export default AboutMe;