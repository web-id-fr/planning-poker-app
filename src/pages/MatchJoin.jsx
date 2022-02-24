import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { lobbyClient } from '../lobby'
import { GAME_PLANNING_POKER } from '../game'

const MatchJoin = () => {
    const history = useHistory();
    const { matchID } = useParams()
    const playerJson = localStorage.getItem(matchID)
    const player = playerJson ? JSON.parse(playerJson) : null
    const [playerName, setPlayerName] = useState(player?.playerName ?? '')

    const joinMatch = async () => {
        const { playerID, playerCredentials } = await lobbyClient.joinMatch(
            GAME_PLANNING_POKER,
            matchID,
            {
                playerName,
            }
        );

        localStorage.setItem(matchID, JSON.stringify({
            playerName,
            playerID,
            playerCredentials
        }));

        history.replace(`/${matchID}`)
    }

    return (
        <div>
            Join form
            <input type="text" value={playerName}
                   onChange={(e) => setPlayerName(e.target.value)} />
            <button onClick={joinMatch}>Join</button>
        </div>
    )
};

export default MatchJoin;