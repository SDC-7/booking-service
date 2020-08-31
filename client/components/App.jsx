import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import IntroPriceAndRating from './IntroPriceAndRating.jsx';
// eslint-disable-next-line import/extensions
import MainBookingAndPricing from './MainBookingAndPricing.jsx';
import '../assets/bootstrap.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listing: {},
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    const urlId = window.location.href.split('/')[3];
    this.fetchListingInfo(urlId);
  }

  fetchListingInfo(urlId) {
    axios.get(`http://localhost:3002/api/booking/${urlId}`)
      .then(({ data }) => {
        this.setState({
          listing: {
            ownerName: data.host,
            rating: data.rating,
            numRatings: data.raters,
            pricePerNight: data.price,
            discountAmount: data.discount,
          },
        });
      })
      .catch((err) => {
        console.error(`Error retrieving listing data from server: ${err}`);
      });
  }

  render() {
    const MainApp = styled.div`
      width: 368px;
      height: auto;
      padding: 24px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
      font-family: 'Circular Air Book', 'Circular Std Book', 'Roboto', sans-serif;
    `;

    const { listing } = this.state;

    return (
      <MainApp>
        <IntroPriceAndRating listing={listing} />
        <MainBookingAndPricing listing={listing} />
      </MainApp>
    );
  }
}

export default App;
