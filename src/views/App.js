import React, {Component} from 'react';
import UserCard from './deckUserView';
import CpuCard from './deckCpuView';
import ButtonPlay from './../controller/ButtonPlay';
import {Modal} from './../controller/ButtonPlay';

import {evaluateWinner} from './../controller/evaluateWinner';

function App() {
    return (
        <div className="App">
            <UserCard />
            <ButtonPlay/>
            <CpuCard />
        </div>
    )
}

export default App;
