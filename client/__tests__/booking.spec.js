import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import Booking from '../components/Booking.jsx';

describe('<Booking />', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  it('calls componentDidMount', () => {
    spy(Booking.prototype, 'componentDidMount');
    wrapper = mount(<Booking />);
    expect(Booking.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  it('calls fetchListingInfo on mount', () => {
    Booking.prototype.fetchListingInfo = jest.fn(); // creates mock function for API call
    spy(Booking.prototype, 'fetchListingInfo');
    wrapper = mount(<Booking />);
    expect(Booking.prototype.fetchListingInfo).to.have.property('callCount', 1);
  });
});
