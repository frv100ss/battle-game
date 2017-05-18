import React, {Component} from 'react';
import { connect } from 'react-redux';

class CpuCard extends Component {
    render() {
        const {
            userCard,
            userDeckLength,
            userBattleCard,
            userCardInsideBattle,
            userDeck

        } = this.props;

        let userCardToTender = userCard(),
            userBattleCardRender = userBattleCard(),
            userCardInsideRender =userCardInsideBattle(),
            currentCpuCardStyle, insideBattleStyle, battleStyle;


        if (userDeckLength >= 1) {
                currentCpuCardStyle = {
                backgroundImage: userCardToTender.backgroundImage,
                backgroundSize: 'cover',
            };
        }
        let versoStyle = {
            backgroundImage: 'url(' + require('./../img/52_cards/verso.jpg') + ')',
            backgroundSize: 'cover'
        };

        if (userDeckLength >= 3) {

                insideBattleStyle = {
                backgroundImage: userCardInsideRender.backgroundImage,
                backgroundSize: 'cover'
            };

                battleStyle = {
                backgroundImage: userBattleCardRender.backgroundImage,
                backgroundSize: 'cover'
            };
        }

        return (
            <div className="user-card-container">
                {userDeckLength >= 1 &&
                <h2>{userCardToTender.value}</h2>
                }
                <p>{userDeckLength} cartes</p>
                {userDeckLength >= 1 &&
                <div className="user-card-image" style={currentCpuCardStyle}>

                </div>
                }
                <div className="user-card-verso" style={versoStyle}>

                </div>
                {userDeckLength >= 3 &&
                <div className="user-card-inside-battle" style={insideBattleStyle}>

                </div>
                }
                {userDeckLength >= 3 &&
                <div className="user-card-battle" style={battleStyle}>

                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userCard : ()=> {
            if(state.Decks.deckUser.length >=1){
                return state.Decks.deckUser[0]
            }
            return null;
        },
        userBattleCard: ()=> {
            if(state.Decks.deckUser.length >=3){
                return state.Decks.deckUser[2]
            }
            return null;
        },
        userCardInsideBattle: ()=> {
            if(state.Decks.deckUser.length >=2){
                return state.Decks.deckUser[1]
            }
            return null;
        },
        userDeckLength : state.Decks.deckUser.length,
        userDeck : state.Decks.deckUser,
    };
};

export default connect(mapStateToProps)(CpuCard);