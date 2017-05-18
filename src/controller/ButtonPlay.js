import store from "./../data/store";
import React, {Component} from 'react';
import * as actionCreators from "./../controller/evaluateWinner";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {animUserWin} from './../animations/userWinCard';
import {animCpuWin} from './../animations/cpuWinCard';
import {animBattle} from './../animations/battle';
import {cpuWinGame} from './../animations/cpuWinGame';
import {userWinGame} from './../animations/userWinGame';
import GSAP from 'react-gsap-enhancer';

export class ButtonPlay extends Component {
    constructor() {
        super();
        this.evaluateWinner = this.evaluateWinner.bind(this)
    }

    animationToDisplay() {
        let userCard, cpuCard, userDeckLength, cpuDeckLength;

        userDeckLength = store.getState().Decks.deckUser.length;
        cpuDeckLength = store.getState().Decks.deckCpu.length;


        if (cpuDeckLength >= 1 &&
            userDeckLength>= 1) {
            cpuCard = store.getState().Decks.deckCpu[0].value;
            userCard = store.getState().Decks.deckUser[0].value;

            userCard > cpuCard ?
                this.addAnimation(animUserWin).play() :
                this.addAnimation(animUserWin).pause();

            cpuCard > userCard ?
                this.addAnimation(animCpuWin).play() :
                this.addAnimation(animCpuWin).pause();

            if (userCard === cpuCard)
                this.addAnimation(animBattle).play();
        }

        else cpuDeckLength < 1 ?  (this.addAnimation(userWinGame).play(),
                                   this.addAnimation(animUserWin).pause()) :
                                  (this.addAnimation(cpuWinGame).play(),
                                   this.addAnimation(animCpuWin).pause())

    }

    componentDidMount() {
        if (store.getState().Decks.deckCpu.length >= 1 &&
            store.getState().Decks.deckUser.length >= 1) {
            this.animationToDisplay()
        }
    }

    componentWillReceiveProps() {
            this.animationToDisplay()
    }

    hideModal() {
        window.location.href = '/'
    }

    evaluateWinner() {
        const {
            cpuVal,
            userVal,
            cpuBattleVal,
            userBattleVal,
            cpuDoubleVal,
            userDoubleVal,
            action

        } = this.props;

        let cpuValue = cpuVal(),
            userValue = userVal(),
            cpuBattleValue = cpuBattleVal(),
            userBattleValue = userBattleVal();

        if (cpuValue !== "loose" && userValue !== "loose") {

            if (cpuValue > userValue) {
                action.cpuWin();
            }

            else if (userValue > cpuValue) {
                action.userWin();
            }

            if (userValue === cpuValue) {
                userBattleValue > cpuBattleValue ?
                    action.userWinBattle() :
                    action.cpuWinBattle();
            }
            //TODO Add different cases : eg add case where cpu or user are unable to play Battle or Double Battle
        }
    }

    render() {
        return (
            <div className="btn-wrapper">
                <button className="btn-play"
                        onClick={this.evaluateWinner}>
                    JOUER
                </button>
                <div className="modal" id="test">
                    <div className="modal-btn-close" onClick={this.hideModal}>

                    </div>
                    <p className="modal-content"></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cpuVal: () => {
            if (state.Decks.deckCpu.length >= 1) {
                return state.Decks.deckCpu[0].value
            }
            return 'loose';
        },
        userVal: () => {
            if (state.Decks.deckUser.length >= 1) {
                return state.Decks.deckUser[0].value
            }
            return 'loose';
        },
        cpuBattleVal: () => {
            if (state.Decks.deckCpu.length >= 3) {
                return state.Decks.deckCpu[2].value
            }
            return 'Cpu Unable To play Battle';
        },
        userBattleVal: () => {
            if (state.Decks.deckUser.length >= 3) {
                return state.Decks.deckUser[2].value
            }
            return 'User Unable To play Battle';
        },
        cpuDoubleVal: () => {
            if (state.Decks.deckCpu.length >= 5) {
                return state.Decks.deckCpu[4].value
            }
            return 'Cpu Unable To play DoubleBattle';

        },
        userDoubleVal: () => {
            if (state.Decks.deckUser.length >= 4) {
                return state.Decks.deckUser[4].value
            }
            return 'User Unable To play DoubleBattle';
        },
    };
};

const mapDispatchToProps = (dispatch) => {
    return {action: bindActionCreators(actionCreators, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(GSAP()(ButtonPlay));