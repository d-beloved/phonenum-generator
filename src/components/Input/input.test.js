import React from 'react';
import { shallow } from 'enzyme';

import Input from "./Input";

describe('Button Component', () => {
  it('should render the button correctly', () => {
    const component = shallow(<Input />);

    expect(component).toMatchSnapshot();
  });
});
