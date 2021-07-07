import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromCards from './cards/cards.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
	cards: fromCards.reducer
};
