import React, {Component} from 'react';
import ConnectedButtonPlay, {ButtonPlay} from "./../controller/ButtonPlay";
import { shallow } from "enzyme";
import expect from 'expect';

describe('>>>ButtonPlay Render and functionnalities',()=>{

    it('should render without exploding', () => {
        const wrapper = shallow(<ButtonPlay />);
        expect(wrapper.length).toEqual(1);
    });

    it('should render a button play inside, with a "btn-play" class', () => {
        const wrapper = shallow(<ButtonPlay />);
        const isButton = wrapper.find('button');
        expect(isButton.length).toEqual(1);
        expect(isButton.node.props.className).toEqual('btn-play');
    });

    it('should call evaluateWinner Method when clicking on it', () => {
        const spy = expect.spyOn(ButtonPlay.prototype, "evaluateWinner");
        const wrapper = shallow(<ButtonPlay />);
        expect(spy).toNotHaveBeenCalled();
        wrapper.find("button").simulate("click");
        expect(spy).toHaveBeenCalled();
    });

});