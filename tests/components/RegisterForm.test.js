/**
 * Import
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
// Components
import RegisterForm from 'src/components/RegisterForm';

// préparation de should
should();

describe('Formulaire', () => {
  it('formualire existe bien', () => {
    const formulaire = shallow(<RegisterForm />);
    expect(formulaire).should.exist;
  });

  it('should submit event when click on submit', () => {
    const onSubmit = sinon.spy();
    const wrapper = shallow(<RegisterForm handleRegister={onSubmit} />);
    const button = wrapper.find('form');

    button.simulate('submit');
    expect(onSubmit.callCount).equals(1);
  });
  // un test suspendu avec skip
});
