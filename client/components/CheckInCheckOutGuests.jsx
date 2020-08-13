import React from 'react';
import Guests from './Guests.jsx';
import styled from 'styled-components';

class CheckInCheckOutGuests extends React.Component {
  constructor() {
    super();

    this.state = {
      checkIn: null,
      checkOut: null,
      guests: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    };
  }

  render() {
    const BookingGrid = styled.div`
      display: grid;
      width: auto;
      height: 110px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      text-align: center;
      margin-top: 20px;
      border: 1px solid rgba(113, 113, 113, 0.7);
      border-radius: 12px;
    `;

    const checkIn = styled.div`
      grid-column: 1;
      grid-row: 1;
    `;

    const checkOut = styled.div`
      grid-column: 2;
      grid-row: 1;
    `;

    const Guests = styled.div`
      grid-column: 1 / 3;
      grid-row: 2;
    `;
    return (
      <BookingGrid>
        <checkIn>Check-In</checkIn>
        <checkOut>Check-Out</checkOut>
        <Guests>Guests</Guests>
      </BookingGrid>
    );
  }
}

export default CheckInCheckOutGuests;
