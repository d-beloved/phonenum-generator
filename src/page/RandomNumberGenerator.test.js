import React from 'react';
import { shallow } from 'enzyme';

import RandomGenerator from './RandomNumberGenerator';

describe('Random phone number Generator', () => {
  it('should render correctly in "debug" mode', () => {

    const component = shallow(<RandomGenerator debug />);

    expect(component).toMatchSnapshot();
  });
});
