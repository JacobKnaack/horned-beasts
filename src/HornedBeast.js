import React from 'react';

class HornedBeast extends React.Component {
  constructor() {
    super(); // calls the constructor for React.Component
  }
  // this.props.title
  // this.props.description
  // this.props.imageUrl

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
        <p>{this.props.description}</p>
      </div>
    )
  }

}

export default HornedBeast;
