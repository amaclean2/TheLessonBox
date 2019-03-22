import { Component, OnInit } from '@angular/core';
import { LESSONS } from '../dummyDataList';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	constructor() { }

	lesson = LESSONS[0];

	ngOnInit() {
	}

}
