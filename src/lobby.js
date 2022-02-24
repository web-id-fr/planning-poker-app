import { LobbyClient } from 'boardgame.io/client'
import { Lobby } from 'boardgame.io/react';

export const lobbyClient = new LobbyClient({ server: 'http://localhost:8000' });
