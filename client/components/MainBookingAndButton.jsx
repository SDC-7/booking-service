/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import ServiceFeeModal from './ServiceFeeModal.jsx';
// eslint-disable-next-line import/extensions
import DiscountModal from './DiscountModal.jsx';
// eslint-disable-next-line import/extensions
import PricePerNightModal from './PricePerNightModal.jsx';

class MainBookingAndButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkIn: props.listing.checkIn,
      checkOut: props.listing.checkOut,
      guests: {
        adults: props.listing.adults,
        children: props.listing.children,
        infants: props.listing.infants,
      },
      serviceFeeRect: null,
      discountRect: null,
      pricePerNightRect: null,
    };
  }

  componentDidMount() {
    this.setState({
      serviceFeeRect: document.getElementById('serviceFee').getBoundingClientRect(),
      pricePerNightRect: document.getElementById('pricePerNight').getBoundingClientRect(),
    });
    // eslint-disable-next-line no-unused-expressions
    (document.getElementById('discount'))
      ? this.setState({
        discountRect: document.getElementById('discount').getBoundingClientRect(),
      })
      : null;
  }

  getGuestSubTextString() {
    const { guests } = this.state;
    const guestString = ((guests.adults + guests.children) <= 1)
      ? 'guest'
      : 'guests';
    const infantString = (guests.infants <= 1)
      ? 'infant'
      : 'infants';

    let guestSubTextString = `${guests.adults + guests.children} ${guestString}`;
    if (guests.infants) {
      guestSubTextString += `, ${guests.infants} ${infantString}`;
    }

    return guestSubTextString;
  }

  getDaysBetweenDates() {
    const { checkIn, checkOut } = this.state;
    const firstDay = new Date(checkIn);
    const secondDay = new Date(checkOut);
    const timeDifference = secondDay.getTime() - firstDay.getTime();
    return timeDifference / (1000 * 3600 * 24);
  }

  render() {
    const { listing } = this.props;
    const {
      checkIn,
      checkOut,
      serviceFeeRect,
      discountRect,
      pricePerNightRect,
    } = this.state;

    const guestSubTextString = this.getGuestSubTextString();

    const numDays = (checkIn && checkOut)
      ? this.getDaysBetweenDates()
      : 0;

    const totalBeforeDiscounts = (numDays)
      ? listing.pricePerNight * numDays
      : 0;

    const discountAmountForNights = (listing.discountAmount)
      ? Math.round(totalBeforeDiscounts * (listing.discountAmount / 100))
      : 0;

    const serviceFee = (numDays)
      ? Math.round(totalBeforeDiscounts * 0.11)
      : 0;

    const grandTotal = (numDays)
      ? totalBeforeDiscounts - discountAmountForNights + serviceFee
      : 0;

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
      padding: 11px 0 0 11px;
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
      color: {(checkIn) ? rgb(221, 221, 221) : rgb(113, 113, 113)};
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
      padding-top: 4px;
      font-size: 16px;
      line-height: 18px;
      font-weight: lighter;
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

    const WontBeCharged = styled.p`
      display: block;
      font-size: 14px;
      text-align: center;
      margin: 12px 0;
    `;

    const PricingFlexContainer = styled.div`
      display: flex;
      flex-direction: column;
    `;

    const PricingFlexItem = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `;

    const PricingTitleText = styled.p`
      font-size: 16px;
      text-decoration: underline;
      margin-block-start: 6px;
      margin-block-end: 6px;
    `;

    const PricingSubTotal = styled(PricingTitleText)`
      text-decoration: none;
    `;

    const PricingDiscountAmount = styled(PricingSubTotal)`
      color: rgb(0, 138, 5);
      font-weight: 600;
    `;

    const PricingGrandTotalFlexItem = styled(PricingFlexItem)`
      border-top: 1px solid rgb(221, 221, 221);
      padding-top: 18px;
      margin-top: 10px;
    `;

    const PricingGrandTotal = styled.p`
      font-size: 16px;
      font-weight: 600;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-top: 6px;
    `;

    return (
      <div>
        <BookingGrid>

          <CheckInGridItem>
            <GridItemText>
              CHECK-IN
            </GridItemText>
            <CheckDateSubText>
              {(checkIn)
                ? `${checkIn}`
                : 'Add Date'}
            </CheckDateSubText>
          </CheckInGridItem>

          <CheckOutGridItem>
            <GridItemText>
              CHECKOUT
            </GridItemText>
            <CheckDateSubText>
              {(checkOut)
                ? `${checkOut}`
                : 'Add Date'}
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

        <WontBeCharged>
          {'You won\'t be charged yet'}
        </WontBeCharged>

        <PricingFlexContainer>

          <PricingFlexItem>
            <PricingTitleText id="pricePerNight">
              <PricePerNightModal rect={pricePerNightRect} listing={listing} numDays={numDays} />
            </PricingTitleText>
            <PricingSubTotal>
              {`$${(totalBeforeDiscounts).toLocaleString()}`}
            </PricingSubTotal>
          </PricingFlexItem>
          {(listing.discountAmount)
            ? (
              <PricingFlexItem>
                <PricingTitleText id="discount">
                  <DiscountModal rect={discountRect} listing={listing} />
                </PricingTitleText>
                <PricingDiscountAmount>
                  {`-$${discountAmountForNights.toLocaleString()}`}
                </PricingDiscountAmount>
              </PricingFlexItem>
            )
            : null}
          <PricingFlexItem>
            <PricingTitleText id="serviceFee">
              <ServiceFeeModal rect={serviceFeeRect} />
            </PricingTitleText>
            <PricingSubTotal>
              {`$${(serviceFee).toLocaleString()}`}
            </PricingSubTotal>
          </PricingFlexItem>

          <PricingGrandTotalFlexItem>
            <PricingGrandTotal>
              Total
            </PricingGrandTotal>
            <PricingGrandTotal>
              {`$${grandTotal.toLocaleString()}`}
            </PricingGrandTotal>
          </PricingGrandTotalFlexItem>

        </PricingFlexContainer>
      </div>
    );
  }
}

MainBookingAndButton.propTypes = {
  listing: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MainBookingAndButton;
