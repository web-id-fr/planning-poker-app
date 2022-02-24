import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import MatchCreate from './pages/MatchCreate'
import MatchJoin from './pages/MatchJoin'
import Match from './pages/Match'

// const Player = Client({
//     game: Game,
//     board: Board,
//     numPlayers: 3,
//     multiplayer: Local(),
// });

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/:matchID" component={Match} exact />
                <Route path="/:matchID/join" component={MatchJoin} exact />
                <Route path="/" component={MatchCreate} exact />
            </Switch>
        </Router>
    )
    // <Lobby
    //     gameServer={`http://${window.location.hostname}:8000`}
    //     lobbyServer={`http://${window.location.hostname}:8000`}
    //     gameComponents={[
    //         { game: Game, board: Board }
    //     ]}
    // />
};
export default App;
