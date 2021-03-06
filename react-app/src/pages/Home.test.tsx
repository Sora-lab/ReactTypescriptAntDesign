import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import Home from './Home';
configure( { adapter: new Adapter });


it('Home loads without crashing', ()=>{
    const token = '3SLUNTKN5UABYMKHIB5QINDHTSQP4';
    const hostName = 'https://narrative.kbase.us';
    const loggedInUser = 'amarukawa'
    shallow(<Home token={token} hostName={hostName} loggedInUser={loggedInUser}/>);
})