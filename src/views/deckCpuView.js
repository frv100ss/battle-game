import React, {Component} from 'react';
import { connect } from 'react-redux';

class CpuCard extends Component {
    render() {
        const {
            cpuCard,
            cpuDeckLength,
            cpuBattleCard,
            cpuCardInsideBattle,
            cpuDeck

        } = this.props;

        let cpuCardToTender = cpuCard(),
            cpuBattleCardRender = cpuBattleCard(),
            cpuCardInsideRender =cpuCardInsideBattle(),
            currentCpuCardStyle, insideBattleStyle, battleStyle;


        if (cpuDeckLength >= 1) {
                currentCpuCardStyle = {
                backgroundImage: cpuCardToTender.backgroundImage,
                backgroundSize: 'cover',
            };
        }

        let versoStyle = {
            backgroundImage: 'url(' + require('./../img/52_cards/verso.jpg') + ')',
            backgroundSize: 'cover'
        };


        if(cpuDeckLength >=3) {
                insideBattleStyle = {
                backgroundImage: cpuCardInsideRender.backgroundImage,
                backgroundSize: 'cover'
            };

                battleStyle = {
                backgroundImage: cpuBattleCardRender.backgroundImage,
                backgroundSize: 'cover'
            };
        }



        return (
            <div className="cpu-card-container">
                {cpuDeckLength >= 1 &&
                <h2>{cpuCardToTender.value}</h2>
                }
                <p>{cpuDeckLength} cartes</p>
                {cpuDeckLength >= 1 &&
                <div className="cpu-card-image" style={currentCpuCardStyle}>

                </div>
                }
                <div className="cpu-card-verso" style={versoStyle}>

                </div>
                {cpuDeckLength >= 3 &&
                <div className="cpu-card-inside-battle" style={insideBattleStyle}>

                </div>
                }
                {cpuDeckLength >=3 &&
                <div className="cpu-card-battle" style={battleStyle}>

                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cpuCard : ()=> {
            if(state.Decks.deckCpu.length >=1){
                return state.Decks.deckCpu[0]
            }
            return null;
        },
        cpuBattleCard: ()=> {
            if(state.Decks.deckCpu.length >=3){
                return state.Decks.deckCpu[2]
            }
            return null;
        },
        cpuCardInsideBattle: ()=> {
            if(state.Decks.deckCpu.length >=2){
                return state.Decks.deckCpu[1]
            }
            return null;
        },
        cpuDeckLength : state.Decks.deckCpu.length,
        cpuDeck : state.Decks.deckCpu
    };
};

export default connect(mapStateToProps)(CpuCard)
