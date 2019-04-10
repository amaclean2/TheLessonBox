import { Component, Input, OnInit } from '@angular/core';
import { CodeService } from '../code.service';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent {

	constructor( private codeService: CodeService ) {}

	fileUrl: string;

	@Input() lesson;

	submitCode(): void {
		console.log('code submitted');
	}

	getCode(someCode): string {
		console.log('gotten', someCode);
		return '';
	}

	loadCode() {
		this.codeService.getCode('ExerciseOne.txt')
	}

	ngOnInit() {
		this.loadCode();
	}

}
