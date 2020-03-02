import { Action } from '@ngrx/store';
import { CardsData } from '../../../business/cards/dto/cards-data';

export enum CardsActionType {
	SearchName = '[CardsActionType] Search Name',
	GetCards = '[CardsActionType] Get Cards',
	GetCardsSuccess = '[CardsActionType] Get Cards Success',
	GetCardsFailed = '[CardsActionType] Get Cards Failed',
	IncrementPage = '[CardsActionType] Increment Page'
}

export class SearchName implements Action {
	public readonly type = CardsActionType.SearchName;

	constructor(public payload: string) {
	}
}

export class GetCards implements Action {
	public readonly type = CardsActionType.GetCards;
}

export class GetCardsSuccess implements Action {
	public readonly type = CardsActionType.GetCardsSuccess;

	constructor(public payload: CardsData) {
	}
}

export class GetCardsFailed implements Action {
	public readonly type = CardsActionType.GetCardsFailed;

	constructor(public payload: Error) {
	}
}

export class IncrementPage implements Action {
	public readonly type = CardsActionType.IncrementPage;
}

export type CardsActions =
	| SearchName
	| GetCards
	| GetCardsSuccess
	| GetCardsFailed
	| IncrementPage;
