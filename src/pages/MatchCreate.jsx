import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { GAME_PLANNING_POKER } from '../game'
import { lobbyClient } from '../lobby'


const MatchCreate = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [matchName, setMatchName] = useState('')
    const [playerName, setPlayerName] = useState('Master')
    const [matches, setMatches] = useState([])

    useEffect(async () => {
        const { matches } = await lobbyClient.listMatches(GAME_PLANNING_POKER);
        setMatches(matches)
    }, [])

    const createMatch = async () => {
        setLoading(true)
        const { matchID } = await lobbyClient.createMatch(GAME_PLANNING_POKER, {
            numPlayers: 99,
            setupData: { matchName }
        });
        const { playerCredentials } = await lobbyClient.joinMatch(
            GAME_PLANNING_POKER,
            matchID,
            {
                playerID: '0',
                playerName,
            }
        );

        localStorage.setItem(matchID, JSON.stringify({
            playerID: '0',
            playerName,
            playerCredentials
        }));
        setLoading(false)
        history.push(matchID)
    }

    return (
        <div>
            <input type="text" value={matchName}
                   onChange={(e) => setMatchName(e.target.value)} />

            <input type="text" value={playerName}
                   onChange={(e) => setPlayerName(e.target.value)} />
            <button disabled={loading} onClick={createMatch}>Create</button>

            {matches.map(match => {
                return <div key={match.matchID}>
                    {match.setupData.matchName}
                </div>
            })}
        </div>
    );
};

export default MatchCreate;