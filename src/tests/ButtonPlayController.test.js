import ConnectedButtonPlay, {ButtonPlay} from "./../controller/ButtonPlay";
import * as actionCreators from "./../controller/evaluateWinner";
import configureStore from 'redux-mock-store'
import React from 'react';
import { Provider } from 'react-redux';
import expect from 'expect';
import { mount } from "enzyme";
import { sinon, spy } from 'sinon';


describe('>>>ButtonPlay Logic - REACT-REDUX (Mount + wrapping in <Provider>)',()=>{

    const mockStore = configureStore();
    let store,initialState, props;

    beforeEach(()=>{
         initialState = {

            Decks: {
                deckUser:[{
                    name: "roi-coeur",
                    value: 13
                },{
                    name: "2-pique",
                    value: 2
                },{
                    name: "4-carreau",
                    value: 4
                }, {
                    name: "6-carreau",
                    value: 6
                }, {
                    name: "as-coeur",
                    value: 14
                }],

                deckCpu: [{
                    name: "as-carreau",
                    value: 14
                }, {
                    name: "7-trèfle",
                    value: 7
                }, {
                    name: "9-coeur",
                    value: 9
                },{
                    name: "valet-pique",
                    value: 11
                },{
                    name: "5-trèfle",
                    value: 5
                }]
            }
        };

        store = mockStore(initialState);
        props= store
    });

    it('+++ render the connected(SMART) component', () => {
        const wrapper = mount( <Provider store={store}><ConnectedButtonPlay /></Provider> );
        expect(wrapper.find(ConnectedButtonPlay).length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
        const wrapper = mount( <Provider store={store}><ConnectedButtonPlay /></Provider> );
        expect(wrapper.find(ButtonPlay).prop('cpuVal')).toEqual(initialState.Decks.deckCpu[0].value);
        expect(wrapper.find(ButtonPlay).prop('userVal')).toEqual(initialState.Decks.deckUser[0].value)

    });

    it('+++ check action on dispatching ', () => {
        let action;
        store.dispatch(actionCreators.cpuWin());
        store.dispatch(actionCreators.userWin());
        store.dispatch(actionCreators.userWinBattle());
        store.dispatch(actionCreators.cpuWinBattle());
        action = store.getActions()
        expect(action[0].type).toBe("CPU_WIN");
        expect(action[1].type).toBe("USER_WIN");
        expect(action[2].type).toBe("USER_WIN_BATTLE");
        expect(action[3].type).toBe("CPU_WIN_BATTLE");
    });

});
