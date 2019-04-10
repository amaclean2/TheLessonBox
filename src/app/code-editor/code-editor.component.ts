import { Component, OnInit, Input } from '@angular/core';
import { E } from '@angular/core/src/render3';

@Component({
	selector: 'app-ce',
	templateUrl: './code-editor.component.html',
	styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

	@Input() lesson

	constructor() { }

	code: string = '';

	formatText(text) {
		return text;
	}

	ngOnInit() {
		this.code = this.lesson.data().exercise;
	}

}
