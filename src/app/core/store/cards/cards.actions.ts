import { createAction, props } from '@ngrx/store';
import { CardsData } from '../../../business/cards/dto/cards-data';

export const searchName = createAction(
	'[Cards Page] Search Name',
	props<{ nameFilter: string }>()
);

export const getCards = createAction(
	'[Cards Page] Get Cards'
);

export const getCardsSuccess = createAction(
	'[Cards Page] Get Cards Success',
	props<{ cardData: CardsData }>()
);

export const getCardsFailed = createAction(
	'[Cards Page] Get Cards Failed',
	props<{ error: Error }>()
);

export const incrementPage = createAction(
	'[Cards Page] Increment Page'
);
