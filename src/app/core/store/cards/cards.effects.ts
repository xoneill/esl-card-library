import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CardsDataService } from '../../../business/cards/cards-data.service';
import { CardsActionType, GetCards, GetCardsFailed, GetCardsSuccess, IncrementPage, SearchName } from './cards.actions';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { selectPaging, selectSearchName } from './cards.selectors';
import { CardsData } from '../../../business/cards/dto/cards-data';

@Injectable()
export class CardsEffects {

	@Effect()
	public getCards$ = this.actions$.pipe(
		ofType<GetCards>(CardsActionType.GetCards),
		withLatestFrom(this.store.pipe(select(selectSearchName))),
		withLatestFrom(this.store.pipe(select(selectPaging))),
		switchMap((([[action, searchName], paging]) => this.cardsDataService.getCards$(searchName, paging.page, paging.pageSize).pipe(
			map((data: CardsData) => new GetCardsSuccess(data)),
			catchError((error) => of(new GetCardsFailed(error)))
		)))
	);

	@Effect()
	public paging$ = this.actions$.pipe(
		ofType<IncrementPage>(CardsActionType.IncrementPage),
		map(() => new GetCards())
	);

	@Effect()
	public search$ = this.actions$.pipe(
		ofType<SearchName>(CardsActionType.SearchName),
		map(() => new GetCards())
	);

	constructor(
		private actions$: Actions,
		private store: Store<AppState>,
		private cardsDataService: CardsDataService) {
	}
}
