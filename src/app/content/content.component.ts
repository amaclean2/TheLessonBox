import { Component, Input } from '@angular/core';

import { Lesson } from '../lesson';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent {

	@Input() lesson;

}
