import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent {

	constructor() {}

	@Input() lesson;

	bio: string;

	submitCode(): void {
		console.log('code submitted');
	}

	loadCode() {
		this.bio = this.lesson.data().body;
		this.bio = this.bio.toString();
		console.log(this.bio.indexOf('\n'));
	}

	ngOnInit() {
		this.loadCode();
	}

}
