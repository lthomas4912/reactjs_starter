import React from 'react';
import {shallow} from 'enzyme';
import SignUp from "./components/SignUpContainer/SignUp.js";
import { mount } from 'enzyme';
import { ExpansionPanelActions } from '@material-ui/core';


describe('signup Component',()=> {
    it('only has 1 h3 in SignUp',()=>{
        const wrapper = shallow(<SignUp/>);
        const text = wrapper.find('h3');
        expect(test).toHaveLength(0);

    })
})

it('check if Signup message is visible',()=>{
    const wrapper = shallow(<SignUp/>);
    const text = wrapper.find('h3').text();
    expect(text).toEqual('Sign Up')
})

it('check if First Name input is present', ()=>{
    const wrapper = shallow(<SignUp/>);
    const firstNameinput = wrapper.find('input.firstName');

  expect(firstNameinput).toHaveLength(1);
});

it('check if Last Name input is present', ()=>{
    const wrapper = shallow(<SignUp/>);
    const lastNameinput = wrapper.find('input.lastName');

  expect(lastNameinput).toHaveLength(1);
});

it('check if Email Address input is present', ()=>{
    const wrapper = shallow(<SignUp/>);
    const emailAddressinput = wrapper.find('input.emailAddress');

  expect(emailAddressinput).toHaveLength(1);
});

it('check if Username input is present', ()=>{
    const wrapper = shallow(<SignUp/>);
    const userNameinput = wrapper.find('input.userName');

  expect(userNameinput).toHaveLength(1);
});

it('check if Password input is present', ()=>{
    const wrapper = shallow(<SignUp/>);
    const passWordinput = wrapper.find('input.passWord');

  expect(passWordinput).toHaveLength(1);
});

it('submit button is clicked', ()=>{
    const wrapper= shallow (<SignUp/>);
    const button = wrapper.find('button');
    button.simulate('click')
})

it('href links to signin', ()=>{
const wrapper= shallow (<SignUp/>);
const signinLink = wrapper.find('a');
expect (signinLink.find('[href="sign-in"]')).toBeTruthy();
})

