/**
 * Import
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
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
    const wrapper = mount(<RegisterForm onSubmitForm={onSubmit} />);
    const button = wrapper.find('button');

    button.simulate('submit');
    expect(onSubmit).to.have.property('handleRegisterSubmit', 1);
  });
  // un test suspendu avec skip
});
