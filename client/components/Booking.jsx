import React from 'react';

class Booking extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: true,
    };
  }

  render() {
    return (
      <h2>This rendered successfully using webpack and babel!</h2>
    );
  }
}

export default Booking;
