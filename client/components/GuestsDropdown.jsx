/* eslint-disable no-underscore-dangle */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';

class GuestsDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      guests: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    };

    this._forceOpen = true;
    this.inputWasClicked = this.inputWasClicked.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(dropdownOpen) {
    if (this._inputWasClicked) {
      this._inputWasClicked = false;
      return;
    }
    this.setState({
      dropdownOpen,
    });
  }

  onClick(e) {
    if (e.target.className.split(' ').indexOf('adultsMinus') !== -1) {
      this.setState((prevState) => ({
        guests: {
          ...prevState.guests,
          adults: prevState.guests.adults - 1,
        },
      }));
    } else if (e.target.className.split(' ').indexOf('adultsPlus') !== -1) {
      this.setState((prevState) => ({
        guests: {
          ...prevState.guests,
          adults: prevState.guests.adults + 1,
        },
      }));
    } else if (e.target.className.split(' ').indexOf('childrenMinus') !== -1) {
      this.setState((prevState) => ({
        guests: {
          ...prevState.guests,
          children: prevState.guests.children - 1,
        },
      }));
    } else if (e.target.className.split(' ').indexOf('childrenPlus') !== -1) {
      this.setState((prevState) => ({
        guests: {
          ...prevState.guests,
          children: prevState.guests.children + 1,
        },
      }));
    } else if (e.target.className.split(' ').indexOf('infantsMinus') !== -1) {
      this.setState((prevState) => ({
        guests: {
          ...prevState.guests,
          infants: prevState.guests.infants - 1,
        },
      }));
    } else if (e.target.className.split(' ').indexOf('infantsPlus') !== -1) {
      this.setState((prevState) => ({
        guests: {
          ...prevState.guests,
          infants: prevState.guests.infants + 1,
        },
      }));
    }
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

  inputWasClicked() {
    this._inputWasClicked = true;
  }

  render() {
    const { dropdownOpen, guests } = this.state;
    const guestSubTextString = this.getGuestSubTextString();

    const GuestPickerGrid = styled.div`
      display: flex;
      flex-flow: column nowrap;
      padding: 16px;
      width: 288px;
    `;

    const GuestPickerItem = styled.div`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin-bottom: 28px;
    `;

    const GuestTitle = styled.div`
      display: flex;
      flex-flow: column nowrap;
      font-size: 16px;
      font-weight: 600;
      align-items: center;
    `;

    const GuestSubText = styled.p`
      font-size: 14px;
      font-weight: 400;
      padding-top: 8px;
      margin: 0;
    `;

    const GuestStepperSection = styled.div`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    `;

    const SignClickableContainer = styled.div`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      border: 1px solid rgb(113, 113, 113);

      &:hover {
        border-color: rgb(34, 34, 34);
      }
    `;

    const SignUnClickableContainer = styled.div`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      border: 1px solid rgb(235, 235, 235);
    `;

    const SpecificGuestNumber = styled.div`
      padding: 0 12px;
    `;

    const SignClickable = styled.svg.attrs({
      'aria-hidden': 'true',
      focusable: 'false',
      viewBox: '0 0 32 32',
    })`
      z-index: -10;
      display: flex;
      margin: auto;
      aling-items: center;
      justify-content: center;
      fill: none;
      width: 12px;
      stroke: rgb(113, 113, 113);
      stroke-width: 5.33333;
      overflow: visible;
    `;

    const SignUnClickable = styled(SignClickable)`
      stroke: rgb(235, 235, 235);
    `;

    const MaximumGuestInfo = styled.div`
      color: rgb(113, 113, 113);
      font-size: 14px;
    `;

    return (
      <Dropdown open={dropdownOpen} onToggle={this.onToggle}>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          aria-invalid="false"
          aria-disabled="false"
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
          {guestSubTextString}
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{
            width: '500px !important',
            'box-shadow': 'rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px',
          }}
        >
          <GuestPickerGrid>

            <GuestPickerItem>

              <GuestTitle>
                Adults
              </GuestTitle>

              <GuestStepperSection>

                {(guests.adults !== 1)
                  ? (
                    <SignClickableContainer className="adultsMinus" onClick={this.onClick}>
                      <SignClickable>
                        <path d="m2 16h28" />
                      </SignClickable>
                    </SignClickableContainer>
                  )
                  : (
                    <SignUnClickableContainer>
                      <SignUnClickable>
                        <path d="m2 16h28" />
                      </SignUnClickable>
                    </SignUnClickableContainer>
                  )}

                <SpecificGuestNumber>
                  {this.state.guests.adults}
                </SpecificGuestNumber>

                {(guests.adults + guests.children !== 13)
                  ? (
                    <SignClickableContainer className="adultsPlus" onClick={this.onClick}>
                      <SignClickable>
                        <path d="m2 16h28m-14-14v28" />
                      </SignClickable>
                    </SignClickableContainer>
                  )
                  : (
                    <SignUnClickableContainer>
                      <SignUnClickable>
                        <path d="m2 16h28m-14-14v28" />
                      </SignUnClickable>
                    </SignUnClickableContainer>
                  )}

              </GuestStepperSection>

            </GuestPickerItem>

            <GuestPickerItem>
              <GuestTitle>
                Children
                <GuestSubText>
                  Ages 2-12
                </GuestSubText>
              </GuestTitle>

              <GuestStepperSection>

                {(guests.children !== 0)
                  ? (
                    <SignClickableContainer className="childrenMinus" onClick={this.onClick}>
                      <SignClickable>
                        <path d="m2 16h28" />
                      </SignClickable>
                    </SignClickableContainer>
                  )
                  : (
                    <SignUnClickableContainer>
                      <SignUnClickable>
                        <path d="m2 16h28" />
                      </SignUnClickable>
                    </SignUnClickableContainer>
                  )}

                <SpecificGuestNumber>
                  {guests.children}
                </SpecificGuestNumber>

                {(guests.adults + guests.children !== 13)
                  ? (
                    <SignClickableContainer className="childrenPlus" onClick={this.onClick}>
                      <SignClickable>
                        <path d="m2 16h28m-14-14v28" />
                      </SignClickable>
                    </SignClickableContainer>
                  )
                  : (
                    <SignUnClickableContainer>
                      <SignUnClickable>
                        <path d="m2 16h28m-14-14v28" />
                      </SignUnClickable>
                    </SignUnClickableContainer>
                  )}

              </GuestStepperSection>
            </GuestPickerItem>

            <GuestPickerItem>
              <GuestTitle>
                Infants
                <GuestSubText>
                  Under 2
                </GuestSubText>
              </GuestTitle>

              <GuestStepperSection>

                {(guests.infants !== 0)
                  ? (
                    <SignClickableContainer className="infantsMinus" onClick={this.onClick}>
                      <SignClickable>
                        <path d="m2 16h28" />
                      </SignClickable>
                    </SignClickableContainer>
                  )
                  : (
                    <SignUnClickableContainer>
                      <SignUnClickable>
                        <path d="m2 16h28" />
                      </SignUnClickable>
                    </SignUnClickableContainer>
                  )}

                <SpecificGuestNumber>
                  {guests.infants}
                </SpecificGuestNumber>

                {(guests.infants !== 5)
                  ? (
                    <SignClickableContainer className="infantsPlus" onClick={this.onClick}>
                      <SignClickable>
                        <path d="m2 16h28m-14-14v28" />
                      </SignClickable>
                    </SignClickableContainer>
                  )
                  : (
                    <SignUnClickableContainer>
                      <SignUnClickable>
                        <path d="m2 16h28m-14-14v28" />
                      </SignUnClickable>
                    </SignUnClickableContainer>
                  )}

              </GuestStepperSection>
            </GuestPickerItem>

            <GuestPickerItem>
              <MaximumGuestInfo>
                13 guests maximum. Infants don’t count toward the number of guests.
              </MaximumGuestInfo>
            </GuestPickerItem>

          </GuestPickerGrid>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default GuestsDropdown;
