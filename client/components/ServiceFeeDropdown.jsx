import React from 'react';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

const ServiceFeeDropdown = () => {
  const PricingTitleText = styled.p`
    font-size: 16px;
    color: rgb(34, 34, 34);
    text-decoration: underline;
    margin-block-start: 0;
    margin-block-end: 0;
  `;

  const DropdownContainer = styled.p`
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
          Service Fee
        </PricingTitleText>
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          width: '300px !important',
          padding: '24px',
        }}
      >
        <DropdownContainer>
          This helps us run our platform and offer services like 24/7 support on your trip
        </DropdownContainer>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ServiceFeeDropdown;
