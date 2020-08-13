import React from 'react';
import { mount } from 'enzyme'; // may need shallow too
import { spy } from 'sinon';
import { expect } from 'chai';
// import axios from 'axios';
// eslint-disable-next-line import/extensions
import App from '../components/App.jsx';

describe('<Booking />', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  it('calls componentDidMount', () => {
    spy(App.prototype, 'componentDidMount');
    wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  it('calls fetchListingInfo on mount', () => {
    App.prototype.fetchListingInfo = jest.fn(); // creates mock function for API call
    spy(App.prototype, 'fetchListingInfo');
    wrapper = mount(<App />);
    expect(App.prototype.fetchListingInfo).to.have.property('callCount', 1);
  });
});
