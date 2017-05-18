import PlayersDecks from '../data/PlayersDecks.js';
export function Decks(state = PlayersDecks, action) {
    switch (action.type) {
        case "CPU_WIN":
            state.deckCpu = [...state.deckCpu, state.deckUser[0], state.deckCpu[0] ];
            state.deckCpu = state.deckCpu.slice(1);
            state.deckUser = state.deckUser.slice(1);
            state = {
                deckUser:state.deckUser,
                deckCpu: state.deckCpu
            };
            return state;
            break;

        case "USER_WIN":
            state.deckUser = [...state.deckUser, state.deckCpu[0], state.deckUser[0] ];
            state.deckUser = state.deckUser.slice(1);
            state.deckCpu = state.deckCpu.slice(1);
            state = {
                deckUser:state.deckUser,
                deckCpu: state.deckCpu
            };
            return state;
            break;

        case "CPU_WIN_BATTLE":
            state.deckCpu = [
                ...state.deckCpu,
                state.deckUser[0],
                state.deckCpu[0],
                state.deckUser[1],
                state.deckCpu[1],
                state.deckUser[2],
                state.deckCpu[2]
            ];
            state.deckCpu = state.deckCpu.slice(3, state.deckCpu.length);
            state.deckUser = state.deckUser.slice(3, state.deckUser.length);
            state = {
                deckUser:state.deckUser,
                deckCpu: state.deckCpu
            };
            return state;
            break;

        case "USER_WIN_BATTLE":
            state.deckUser = [
                ...state.deckUser,
                state.deckCpu[0],
                state.deckUser[0],
                state.deckCpu[1],
                state.deckUser[1],
                state.deckCpu[2],
                state.deckUser[2]
            ];
            state.deckUser = state.deckUser.slice(3, state.deckUser.length);
            state.deckCpu = state.deckCpu.slice(3, state.deckCpu.length);
            state = {
                deckUser:state.deckUser,
                deckCpu: state.deckCpu
            };
            return state;
            break;

/*        case "USER_WIN_BATTLE":
            state.splice(0, 3);
            return state;
            break;

        case "CPU_WIN_DOUBLE_BATTLE":
            state.splice(state.length, 0,
                state[0], PlayersDecks.deckUser[0],
                state[1], PlayersDecks.deckUser[1],
                state[2], PlayersDecks.deckUser[2],
                state[3], PlayersDecks.deckUser[3],
                state[4], PlayersDecks.deckUser[4]);
            state.splice(0, 5);
            return state;
            break;

        case "USER_WIN_DOUBLE_BATTLE":
            state.splice(0, 5);
            return state;
            break;

        case "CPU_WIN_TRIPLE_BATTLE":
            state.splice(state.length, 0,
                state[0], PlayersDecks.deckUser[0],
                state[1], PlayersDecks.deckUser[1],
                state[2], PlayersDecks.deckUser[2],
                state[3], PlayersDecks.deckUser[3],
                state[4], PlayersDecks.deckUser[4],
                state[5], PlayersDecks.deckUser[5],
                state[6], PlayersDecks.deckUser[6]);
            state.splice(0, 7);
            return state;
            break;

        case "USER_WIN_TRIPLE_BATTLE":
            state.splice(0, 7);
            return state;
            break;*/

        default:
            return state
    }
}