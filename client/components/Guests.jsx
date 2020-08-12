import React from 'react';

class Guests extends React {
  constructor(props) {
    super(props);

    this.state = {
      guestsDropdown: false,
    };
  }

  render() {
    return (
      <div>
        <h3>Guests</h3>
      </div>
    );
  }
}

export default Guests;
