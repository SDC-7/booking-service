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

  const PPN = styled.p`
    font-size: 22px;
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

  const RatingSection = styled(PricingAndRatingBar)`
    align-items: center;
    justify-content: flex-end;
  `;

  const Rating = styled.div`
    font-size: 15px;
    letter-spacing: 1px;
    padding-left: 4px;
  `;

  const NumRatings = styled(Rating)`
    color: rgb(113, 113, 113);
  `;

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
          / night
        </PerNight>
      </PricingSection>
      <RatingSection>
        <img src="../assets/airbnb_rating_star.png" alt="rating star" />
        <Rating>
          {listing.rating}
        </Rating>
        <NumRatings>
          {`(${listing.numRatings})`}
        </NumRatings>
      </RatingSection>

    </PricingAndRatingBar>
  );
};

// Defines prop types as per airbnb styling guide
IntroPriceAndRating.propTypes = {
  listing: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IntroPriceAndRating;
