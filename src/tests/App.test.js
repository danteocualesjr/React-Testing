import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('Should render App component without crashing.', () => {
    shallow(<App />);
  });

  it('Should render Display and Panel components.', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Display).length).toEqual(1);
    expect(wrapper.find(Panel).length).toEqual(1);
  });
});

