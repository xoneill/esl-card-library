import { CardsState, initialCardsState } from './cards/cards.state';

export interface AppState {
	cards: CardsState;
}

export const initialAppState: AppState = {
	cards: initialCardsState
};

export function getInitialState(): AppState {
	return initialAppState;
}
