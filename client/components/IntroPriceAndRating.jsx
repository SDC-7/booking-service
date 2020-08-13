import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IntroPriceAndRating = ({ listing }) => {
  const PricingAndRatingBar = styled.div`
    display: flex;
    flex-wrap: row wrap;
    justify-content: space-between;
    align-items: flex-end;
  `;
  const PricingSection = styled(PricingAndRatingBar)`
    justify-content: flex-start;
  `;

  const RatingSection = styled(PricingAndRatingBar)`
    justify-content: flex-end;
  `;

  const PPN = styled.p`
    font-size: 22px;
    // font-weight: 600;
    line-height: 26px;
    padding-right: 4px;
    color: rgb(113, 113, 113);
    text-decoration: line-through;
    margin: 0;
  `;

  const DiscountedPPN = styled(PPN)`
    color: rgb(34, 34, 34);
    text-decoration: none;
    padding: 0;
  `;

  const PerNight = styled(DiscountedPPN)`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 4px;
  `;
  const discountedAmount = Math.round(listing.pricePerNight * (1 - (listing.discountAmount / 100)));

  return (
    <PricingAndRatingBar>
      <PricingSection>
        <PPN>
          {(listing.discountAmount !== 0) ? `$${listing.pricePerNight}` : null}
        </PPN>
        <DiscountedPPN>
          {`$${discountedAmount}`}
        </DiscountedPPN>
        <PerNight>
          /night
        </PerNight>
      </PricingSection>
      <RatingSection>
        {`${listing.rating} stars`}
      </RatingSection>
    </PricingAndRatingBar>
  );
};

// Defines prop types as per airbnb styling guide
IntroPriceAndRating.propTypes = {
  listing: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IntroPriceAndRating;
