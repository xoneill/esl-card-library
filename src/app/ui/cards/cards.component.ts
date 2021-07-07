import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../core/store/app.state';
import { incrementPage, searchName } from '../../core/store/cards/cards.actions';
import { Observable, Subject, Subscription } from 'rxjs';
import { CardInfo } from '../../business/cards/dto/card-info';
import {
	selectCards,
	selectError,
	selectIsLoading,
	selectSearchName,
	selectShowMore,
	selectTotal
} from '../../core/store/cards/cards.selectors';
import { withLatestFrom } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StringHelper } from '../../business/shared/bll/string-helper';

@Component({
	selector: 'cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
	public cards$: Observable<CardInfo[]> = this.store.pipe(select(selectCards));
	public total$: Observable<number> = this.store.pipe(select(selectTotal));
	public isLoading$: Observable<boolean> = this.store.pipe(select(selectIsLoading));
	public showMore$: Observable<boolean> = this.store.pipe(select(selectShowMore));
	public searchTerm$: Observable<string> = this.store.pipe(select(selectSearchName));
	public error$: Observable<string> = this.store.pipe(select(selectError));

	private scroll$: Subject<void> = new Subject();

	private subscriptions: Subscription[] = [];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private store: Store<AppState>,
		private toastr: ToastrService) {
	}

	ngOnInit(): void {
		this.subscriptions.push(this.route.queryParams.subscribe(({ nameFilter }) => {
			this.store.dispatch(searchName({ nameFilter }));
		}));

		// Lazy Loading
		this.subscriptions.push(this.scroll$.pipe(withLatestFrom(this.showMore$)).subscribe(([scroll, showMore]) => {
			if (showMore) {
				this.showMore();
			}
		}));

		this.subscriptions.push(this.error$.subscribe((error) => {
			if (!StringHelper.isNullOrEmpty(error)) {
				this.toastr.error(error, 'Error!', { timeOut: 0 });
			}
		}));
	}

	onScroll(): void {
		this.scroll$.next();
	}

	showMore(): void {
		this.store.dispatch(incrementPage());
	}

	resetSearch(): void {
		this.router.navigate(['.'], { relativeTo: this.route, queryParams: null });
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((s) => s.unsubscribe());
	}
}
