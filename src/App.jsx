import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer'
import Game from './game';
import { Board }  from './Board'

const Player = Client({
    game: Game,
    board: Board,
    numPlayers: 3,
    multiplayer: Local(),
});

const App = () => (
    <div>
        <Player playerID="0" />
        <Player playerID="1" />
        <Player playerID="2" />
    </div>
);
export default App;
