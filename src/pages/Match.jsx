import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { lobbyClient } from '../lobby'
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer'
import Game, { GAME_PLANNING_POKER } from '../game'
import { Board } from '../Board'

const Match = () => {
    const history = useHistory();
    const { matchID } = useParams()
    const [match, setMatch] = useState()
    const [player, setPlayer] = useState()

    useEffect(() => {
        const playerJson = localStorage.getItem(matchID)
        if (playerJson) {
            setPlayer(JSON.parse(playerJson))
        } else {
            history.replace(`/${matchID}/join`)
        }
        lobbyClient.getMatch(GAME_PLANNING_POKER, matchID).then(setMatch);

        // return () => {
        //     if (player) {
        //         const { playerID, playerCredentials } = player;
        //         console.log('unmount', playerID, playerCredentials)
        //         if (String(playerID) !== '0') {
        //             lobbyClient.leaveMatch(GAME_PLANNING_POKER, matchID, {
        //                 playerID,
        //                 credentials: playerCredentials,
        //             });
        //         }
        //     }
        // }
    }, [matchID])

    if (!match) {
        return <div>Loading</div>
    }

    const GameClient = Client({
        game: Game,
        board: Board,
        multiplayer: SocketIO({ server: 'localhost:8000' }),
    });

    return (
        <div>
            Match {match?.setupData?.matchName}
            <GameClient
                matchID={match.matchID}
                playerID={player.playerID}
                credentials={player.playerCredentials} />
        </div>
    );
};

export default Match;