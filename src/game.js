const vote = (G, ctx, vote) => {
    G.votes[ctx.playerID] = vote;

    if (G.players.length === Object.keys(G.votes).length) {
        ctx.events.setActivePlayers({ all: 'compare' });
    }
}

const voteStart = (G, ctx, players) => {
    G.players = players;
    G.votes = {};
    ctx.events.setActivePlayers({ all: 'vote' });
}

export const GAME_PLANNING_POKER = 'planning-poker'

const Game = {
    name: GAME_PLANNING_POKER,
    setup: () => ({
        votes: {},
        players: [],
    }),

    moves: {
        voteStart,
    },

    turn: {
        stages: {
            vote: {
                moves: { vote },
                next: 'compare',
            },
            compare: {
                moves: { voteStart }
            }
        },
    },
};

export default Game