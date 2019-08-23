import React from 'react';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import RandomGenerator from './RandomNumberGenerator';

configure({adapter: new Adapter()});

test('message box', () => {})

const setup = () => {
  const props = {
    onInputChange: jest.fn(),
  }
  return shallow(<RandomGenerator {...props} />)
}

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('RandomGenerator', () => {
  it('should render page components successfully', () => {
    const wrapper = setup()
    expect(wrapper.find('div').length).toBe(7)
    expect(wrapper.find('label').length).toBe(2)
    expect(wrapper.find('select').length).toBe(1)
    expect(wrapper.find('table').length).toBe(1)
    expect(wrapper.find('Button').length).toBe(2)
    expect(wrapper.find('InputBox').length).toBe(1)
  })

  it('should call onSelectOrderChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSelectOrderChange = jest.spyOn(wrapper.instance(), 'onSelectOrderChange');
    action.onSelectOrderChange(event);
    expect(onSelectOrderChange).toBeCalled();
  });

  it('should call onInputChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onInputChange = jest.spyOn(wrapper.instance(), 'onInputChange');
    action.onInputChange(event);
    expect(onInputChange).toBeCalled();
  });

  it('should call handleGenerateButton function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const handleGenerateButtonClick = jest.spyOn(wrapper.instance(), 'handleGenerateButton');
    action.handleGenerateButton(event);
    expect(handleGenerateButtonClick).toBeCalled();
  });

  it('should call handleDownload function', () => {
    const wrapper = setup();
    window.URL.createObjectURL = jest.fn();
    window.URL.revokeObjectURL = jest.fn();
    const action = wrapper.instance();
    const handleDownload = jest.spyOn(wrapper.instance(), 'handleDownload');
    action.handleDownload();
    expect(handleDownload).toBeCalled();
  });
})
