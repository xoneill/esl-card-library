import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CardInfoMapper } from './bll/card-info-mapper';
import { map } from 'rxjs/operators';
import { StringHelper } from '../shared/bll/string-helper';
import { CardsResponse } from './dto/cards-response';
import { CardsData } from './dto/cards-data';

@Injectable()
export class CardsDataService {

	private baseUrl = environment.baseUrl;

	constructor(private httpClient: HttpClient) {
	}

	public getCards$(searchName: string, page: number, pageSize: number): Observable<CardsData> {
		const url = `${this.baseUrl}/v1/cards`;
		const params = this.buildCardsUrlParams(searchName, page, pageSize);
		return this.httpClient.get<CardsResponse>(url, {params}).pipe(map(this.buildCardsData));
	}

	private buildCardsUrlParams(name: string, page: number, pageSize: number): HttpParams {
		let params = new HttpParams();

		if (!StringHelper.isNullOrEmpty(name)) {
			params = params.append('name', name);
		}

		params = params.append('page', `${page}`);
		params = params.append('pageSize', `${pageSize}`);

		return params;
	}

	private buildCardsData(resp: CardsResponse): CardsData {
		return {
			cards: resp.cards.map(CardInfoMapper.fromCardFullInfo),
			total: resp._totalCount
		};
	}
}
