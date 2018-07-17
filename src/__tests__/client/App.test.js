// verify that App component mounts
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import App from '../../client/App';

App.prototype.componentWillUnmount = spy();
App.prototype.componentDidMount = spy();

const wrapper = mount(<App />);
wrapper.unmount();

describe('<App />', () => {
  it('should call "componentDidMount"', (done) => {
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    done();
  });
  it('should call "componentWillUnmout"', (done) => {
    expect(App.prototype.componentWillUnmount.calledOnce).to.equal(true);
    done();
  });
});
