import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Guests from './Guests.jsx';

class Booking extends React.Component {
  constructor() {
    super();

    this.state = {
      listing: {},
      unavailableDates: {},
    };
  }

  componentDidMount() {
    const urlId = window.location.href.split('/')[3];
    this.fetchListingInfo(urlId);
  }

  fetchListingInfo(urlId) {
    axios.get(`/api/booking/${urlId}`)
      .then(({ data }) => {
        console.log('Listings: ', data.listing);
        console.log('Unavailable Dates: ', data.unavailableDates);
        this.setState({
          listing: data.listing,
          unavailableDates: data.unavailableDates,
        });
      })
      .catch((err) => {
        console.error(`Error retrieving listing data from server: ${err}`);
      });
  }

  render() {
    const MainApp = styled.div`
      width: 325px;
      height: 430px;
      padding: 24px;
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
      font-family: 'Roboto', sans-serif;
    `;
    return (
      <MainApp>
        <h2>hello</h2>
      </MainApp>
    );
  }
}

export default Booking;
