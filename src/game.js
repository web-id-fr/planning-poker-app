const vote = (G, ctx, vote) => {
    console.log('vote', ctx, vote)
    G.votes[ctx.playerID] = vote;

    if (ctx.numPlayers === Object.keys(G.votes).length) {
        ctx.events.setActivePlayers({ all: 'compare' });
    }
}

const voteStart = (G, ctx) => {
    G.votes = {};
    console.log('voteStart')
    ctx.events.setActivePlayers({ all: 'vote' });
}

const Game = {
    name: 'planning-poker',
    setup: () => ({ votes: {} }),

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