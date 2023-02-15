import React from 'react';
import HornedBeast from './HornedBeast';
import beasts from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {

  render() {
    return (
      <main>
        <Container>
          <Row>
            {beasts.map(item => 
              <Col sm={12} md={6} lg={3}>
                <HornedBeast
                  imageUrl={item.image_url}
                  description={item.description}
                  title={item.title}
                  />
              </Col>
            )}
          </Row>
        </Container>
      </main>
    )
  }

}

export default Main;