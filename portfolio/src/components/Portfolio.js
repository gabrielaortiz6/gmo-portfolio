import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const Portfolio = () => {
  const projects = [
    {
      title: 'hori hori',
      image: 'project1.png',
      deployedLink: 'https://vast-reaches-42188.herokuapp.com/',
      githubLink: 'https://github.com/PhilRug/hori-hori',
    },
    {
      title: 'calorie tracker',
      image: 'project2.png',
      deployedLink: 'https://gabrielaortiz6.github.io/calorie-tracker/',
      githubLink: 'https://github.com/gabrielaortiz6/calorie-tracker',
    },
    {
      title: 'robo art',
      image: 'project2.png',
      deployedLink: 'google.com',
      githubLink: 'https://github.com/CJB14/Robo-art',
    },
    {
      title: 'e-commerce back end',
      image: 'project2.png',
      deployedLink: 'https://github.com/gabrielaortiz6/e-commerce-app',
      githubLink: 'https://github.com/gabrielaortiz6/e-commerce-app',
    },
    {
      title: 'note taker',
      image: 'project2.png',
      deployedLink: '',
      githubLink: 'https://github.com/gabrielaortiz6/note-taker',
    },
    {
      title: 'social media api',
      image: 'project2.png',
      deployedLink: 'https://github.com/gabrielaortiz6/social-media-api',
      githubLink: 'https://github.com/gabrielaortiz6/social-media-api',
    }
  ];

  return (
    <section>
      <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Row className="g-4" >
        {projects.map((project, index) => (
          <Col key={index}>
            <Card style={{ border: 'none' }}>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title className="text-end">{project.title}</Card.Title>
                <div className="caption">
                  <Button variant="link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Button>
                </div>
                <div className="caption">
                  <Button variant="link" href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                    Deployed Site
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </section>
  );
};

export default Portfolio;