import clsx from 'clsx'
import './Board.css'

export const Board = ({
                          playerID,
                          isActive,
                          ctx,
                          moves,
                          G,
                          ...props
                      }) => {
    console.log(isActive, ctx, props)

    const card = G.votes?.[playerID]

    const deck = [1, 2, 3, 7, 14]
    return (
        <div className={clsx('board', { active: isActive })}>
            <p>
                Board {playerID}
            </p>

            {String(playerID) === '0' && ctx?.activePlayers?.[playerID] !== 'vote' && (
                <button onClick={() => moves.voteStart()}>Start vote</button>
            )}

            {['vote', 'compare'].includes(ctx?.activePlayers?.[playerID]) && (
                deck.map((i) => (
                    <button key={i} onClick={() => moves.vote(i)}
                            className={clsx({ active: card === i })}>{i}</button>
                ))
            )}
        </div>
    );
};