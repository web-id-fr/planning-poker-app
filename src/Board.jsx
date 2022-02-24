import clsx from 'clsx'
import './Board.scss'

export const Board = ({
                          playerID,
                          isActive,
                          ctx,
                          moves,
                          G,
                          matchData,
                          ...props
                      }) => {
    // console.log(playerID, props)

    const players = matchData.filter(player => player.isConnected)
    const player = players.find(p => String(p.id) === String(playerID))
    const card = G.votes?.[playerID]
    const stage = ctx?.activePlayers?.[playerID]

    const deck = [1, 2, 3, 7, 14]
    return (
        <div className={clsx('board', { active: isActive })}>
            <p>
                Board {player?.name}
            </p>

            <ul>
                {players?.map?.(p => {
                    return <li key={p.id}>{p.name} - {stage === 'compare' ? G.votes?.[p.id] : '?'}</li>
                })}
            </ul>

            {String(playerID) === '0' && stage !== 'vote' && (
                <button onClick={() => moves.voteStart(players)}>Start vote</button>
            )}

            {['vote', 'compare'].includes(stage) && (
                deck.map((i) => (
                    <button key={i} onClick={() => moves.vote(i)}
                            className={clsx({ active: card === i })}>{i}</button>
                ))
            )}
        </div>
    );
};