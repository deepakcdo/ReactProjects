import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import NavigationItems from './NavigationItems';
import NavigationItem from "./NavigationItem/NavigationItem";


configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    var wrapper;
    beforeEach(()=>{
         wrapper = shallow(<NavigationItems/>);
    });

    it ('Should render 2 <NavigationItem /> elements if not authenticated', ()=> {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it ('Should render 3 <NavigationItem /> elements if authenticated', ()=> {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
});
