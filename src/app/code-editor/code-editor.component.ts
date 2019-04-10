import { Component, OnInit, Input } from '@angular/core';
import { E } from '@angular/core/src/render3';

@Component({
	selector: 'app-ce',
	templateUrl: './code-editor.component.html',
	styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

	@Input() lesson
	@Input() getCode

	constructor() { }

	code: string = '';

	formatText(text) {
		return text;
	}

	getCode('new code');

	handleTyping(e) {
		e.target.innerHTML = this.formatText(e.target.innerText);
	}

	ngOnInit() {
		this.code = this.lesson.data().exercise;
	}

}
