import React from 'react';
import styled from 'styled-components';
// import Guests from './Guests.jsx';

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

    const GridItemText = styled.p`
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 8px 0 0 8px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 1px;
    `;

    const CheckInGridItem = styled.div`
      grid-column: 1;
      grid-row: 1;
      height: 100%;
    `;

    const CheckDateSubText = styled(GridItemText)`
      color: rgb(113, 113, 113);
      padding-top: 4px;
      font-size: 16px;
      line-height: 18px;
      font-weight: 300;
      letter-spacing: 0;
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

    const GuestsSubText = styled(GridItemText)`
      padding-top: 0;
      font-size: 16px;
      line-height: 18px;
      font-weight: 300;
      letter-spacing: 0;
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

          <CheckInGridItem>
            <GridItemText>
              CHECK-IN
            </GridItemText>
            <CheckDateSubText>
              Add date
            </CheckDateSubText>
          </CheckInGridItem>

          <CheckOutGridItem>
            <GridItemText>
              CHECK-OUT
            </GridItemText>
            <CheckDateSubText>
              Add date
            </CheckDateSubText>
          </CheckOutGridItem>

          <GuestsGridItem>
            <GridItemText>
              GUESTS
            </GridItemText>
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
