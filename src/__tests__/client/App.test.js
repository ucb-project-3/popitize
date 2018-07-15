import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import App from '../../client/App';


spy(App.prototype, 'componentDidMount');


describe('<App />', () => {
  it('should call "componentDidMount"', (done) => {
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    done();
  });
});
