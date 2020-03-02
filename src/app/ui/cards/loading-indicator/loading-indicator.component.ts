import { Component, Input } from '@angular/core';

@Component({
	selector: 'cards-loading-indicator',
	templateUrl: './loading-indicator.component.html',
	styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {
	@Input() visible: boolean;
}
