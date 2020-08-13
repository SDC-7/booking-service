import React from 'react';
import Guests from './Guests.jsx';
import styled from 'styled-components';

class MainBookingAndButton extends React.Component {
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
      guestsDropdown: false,
      checkInCheckOutDropdown: false,
    };
  }

  getGuestSubTextString() {
    const { guests } = this.state;
    let guestSubTextString;
    const guestString = ((guests.adults + guests.children) <= 1)
      ? 'guest'
      : 'guests';
    const infantString = (guests.infants <= 1)
      ? 'infant'
      : 'infants';

    guestSubTextString = `${guests.adults + guests.children} ${guestString}`;
    if (guests.infants) {
      guestSubTextString += `, ${guests.infants} ${infantString}`;
    }

    return guestSubTextString;
  }

  render() {
    const BookingGrid = styled.div`
      display: grid;
      width: auto;
      height: 110px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;
      margin-top: 20px;
      border: 1px solid rgba(113, 113, 113, 0.7);
      border-radius: 10px;
      `;

    const CheckInGridItem= styled.div`
      grid-column: 1;
      grid-row: 1;
      height: 100%;
    `;

    const CheckOutGridItem = styled.div`
      grid-column: 2;
      grid-row: 1;
      border-left: 1px solid rgba(113, 113, 113, 0.7);
      height: 100%;
    `;

    const GuestsGridItem = styled.div`
      grid-column: 1 / 3;
      grid-row: 2;
      border-top: 1px solid rgba(113, 113, 113, 0.7);
      height: 100%;
    `;

    const GuestsText = styled.p`
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 4px 0 0 4px;
      font-size: 12px;
      font-weight: 600;
    `;

    const GuestsSubText = styled(GuestsText)`
      padding-top: 0;
      font-size: 14;
      font-weight: 400;
    `;

    const Button = styled.button`
      color: white;
      background-color: rgb(227, 28, 95);
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      width: 100%;
      height: 52px;
      margin-top: 15px;
    `;

    const { checkIn, checkOut } = this.state;

    const guestSubTextString = this.getGuestSubTextString();

    return (
      <div>
        <BookingGrid>
          <CheckInGridItem>CHECK-IN</CheckInGridItem>
          <CheckOutGridItem>CHECK-OUT</CheckOutGridItem>
          <GuestsGridItem>
            <GuestsText>
              GUESTS
            </GuestsText>
            <GuestsSubText>
              {guestSubTextString}
            </GuestsSubText>
          </GuestsGridItem>
        </BookingGrid>
        <Button>
          {(checkIn && checkOut) ? 'Reserve' : 'Check Availability'}
        </Button>
      </div>
    );
  }
}

export default MainBookingAndButton;
