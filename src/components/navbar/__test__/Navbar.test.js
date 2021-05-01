import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe('Navbar testing', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navbar />);
    })

    test('Navbar should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Confirm logo', () => {
        expect(wrapper.find('.logo').text()).toEqual('LOGO')
    })

    test('confirm nav list item', () => {
        let items = ["Home", "About", "Contact", "Login"];
        wrapper.find(".list-item").forEach((item, i) => {
            expect(item.text()).toEqual(items[i]);
        })
    })

    test('confirm hover on Navlist in navbar', () => {
        wrapper.find('.list-item').forEach(item => {
            item.simulate('mouseover');
            // expect(item.props('style')).toHaveProperty('color', '#61dafb')
            expect(item.get(0).getDOMNode().getComputedStyle()).to.have.property({ color: '#61dafb' })

        })
    })
})