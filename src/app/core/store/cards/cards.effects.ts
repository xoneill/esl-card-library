import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CardsDataService } from '../../../business/cards/cards-data.service';
import * as CardsPageActions from './cards.actions';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectPaging, selectSearchName } from './cards.selectors';
import { CardsData } from '../../../business/cards/dto/cards-data';

@Injectable()
export class CardsEffects {

	public getCards$ = createEffect(() => this.actions$.pipe(
		ofType(CardsPageActions.getCards.type),
		withLatestFrom(this.store.pipe(select(selectSearchName))),
		withLatestFrom(this.store.pipe(select(selectPaging))),
		switchMap((([[action, searchName], paging]) =>
			this.cardsDataService.getCards$(searchName, paging.page, paging.pageSize).pipe(
				map((cardData: CardsData) => ({ type: CardsPageActions.getCardsSuccess.type, cardData })),
				catchError((error) => of({ type: CardsPageActions.getCardsFailed.type, error }))
			)))
	));

	public search$ = createEffect(() => this.actions$.pipe(
		ofType(...[
			CardsPageActions.searchName.type,
			CardsPageActions.incrementPage.type
		]),
		map(() => ({ type: CardsPageActions.getCards.type }))
	));

	constructor(
		private actions$: Actions,
		private store: Store<AppState>,
		private cardsDataService: CardsDataService) {
	}
}
