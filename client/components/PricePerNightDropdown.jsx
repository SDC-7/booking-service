import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

const PricePerNightDropdown = ({ listing, numDays }) => {
  const PricingTitleText = styled.p`
    font-size: 16px;
    color: rgb(34, 34, 34);
    text-decoration: underline;
    margin-block-start: 0;
    margin-block-end: 0;
  `;

  const DropdownContainer = styled.div`
    width: 250px;
    color: rgb(113, 113, 113);
    font-size: 14px;
    padding: 4px 16px;
  `;

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{
          width: '100%',
          'text-align': 'left',
          padding: '0',
          color: 'black',
          'background-color': 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <PricingTitleText>
          {`$${listing.pricePerNight} x ${numDays} nights`}
        </PricingTitleText>
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          width: '300px !important',
          padding: '24px',
        }}
      >
        <DropdownContainer>
          Average nightly rate is rounded.
        </DropdownContainer>
      </Dropdown.Menu>
    </Dropdown>
  );
};

PricePerNightDropdown.propTypes = {
  // eslint-disable-next-line no-undef
  listing: PropTypes.objectOf(PropTypes.object).isRequired,
  numDays: PropTypes.number.isRequired,
};

export default PricePerNightDropdown;
