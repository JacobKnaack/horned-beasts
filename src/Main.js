import React from 'react';
import HornedBeast from './HornedBeast';
import beasts from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedBeast: {},
      showModal: false
    }
  }

  // create a method that will set the selected Beast
  setSelectBeast = (beastObj) => {
    this.setState({ 
      selectedBeast: beastObj,
      showModal: true
    });
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <Container>
          <Row>
            {beasts.map(item => 
              <Col sm={12} md={6} lg={3}>
                <HornedBeast
                  beast={item}
                  imageUrl={item.image_url}
                  description={item.description}
                  title={item.title}
                  // pass down select Beast method
                  setSelectBeast={this.setSelectBeast} 
                />
              </Col>
            )}
          </Row>
        </Container>
        {/* {showModal ? <SelectedBeast /> : null} */}
        <SelectedBeast
          beast={this.state.selectedBeast}
          showModal={this.state.showModal} 
          removeModal={() => this.setState({ showModal: false })}
        />
      </main>
    )
  }

}

export default Main;