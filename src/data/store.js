import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {Decks} from '../controller/Decks';


const store = createStore(
    combineReducers({
        Decks,
    })
);



export default store;