import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StringHelper } from '../../../business/shared/bll/string-helper';

@Component({
	selector: 'cards-header',
	templateUrl: './cards-header.component.html',
	styleUrls: ['./cards-header.component.scss']
})
export class CardsHeaderComponent  {
	@Input() nameFilter: string;

	public isSearchMode = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute) {
	}

	toggleSearchMode(): void {
		this.isSearchMode = !this.isSearchMode;
	}

	public search(searchTerm: string): void {
		const params = !StringHelper.isNullOrEmpty(searchTerm) ? { nameFilter: searchTerm } : null;
		this.router.navigate(['.'], { relativeTo: this.route, queryParams: params});
	}
}
