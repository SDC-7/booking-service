import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

const DiscountDropdown = ({ listing }) => {
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
          {`${listing.discountAmount}% nightly discount`}
        </PricingTitleText>
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          width: '300px !important',
          padding: '24px',
        }}
      >
        <DropdownContainer>
          {`${listing.ownerName}'s place has nightly discounts available!`}
        </DropdownContainer>
      </Dropdown.Menu>
    </Dropdown>
  );
};

DiscountDropdown.propTypes = {
  listing: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DiscountDropdown;
