import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { cardsReducers } from './cards/cards.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
	cards: cardsReducers
};
