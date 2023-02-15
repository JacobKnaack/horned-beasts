import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props); // calls the constructor for React.Component
    console.log(props);
    this.state = {
      favorites: 0,
    }
  }
  // this.props.title
  // this.props.description
  // this.props.imageUrl

  handleClick = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  }

  render() {
    console.log(this.props);
    return (
      <Card style={{ maxWidth: '400px' }}>
        <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button onClick={this.handleClick} variant="primary">
            ❤️ {this.state.favorites}
          </Button>
        </Card.Body>
      </Card>
    )
  }

}

export default HornedBeast;
