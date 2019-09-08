import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {BurgerBuilder} from './BurgerBuilder';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';


configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<BurgerBuilder/>);
    });

    it ('Should countain <BuildControls>', ()=> {
        wrapper.setProps({ings: {salad:1}});
        expect(wrapper.find(BurgerControls)).toHaveLength(1);
    });

});
