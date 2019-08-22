import React from 'react';
import { shallow } from 'enzyme';

import Button from "./Button";

describe('Button Component', () => {
  it('should render the button correctly', () => {
    const component = shallow(<Button />);

    expect(component).toMatchSnapshot();
  });
});
