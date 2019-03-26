import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../lesson.service';

import { Lesson } from '../lesson';

export interface UserOptionObject {
	value: string,
	viewValue: string,
	event
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private authService: AuthService,
				private route: ActivatedRoute,
				private router: Router,
				private lessonService: LessonService) {
		router.events.subscribe( val => {
			this.getUser();
			this.getLesson();
		});
	}

	title: string = 'TheLessonBox';
	username: string = 'New User';
	lesson;
	opened: boolean;

	getUser(): void {
		let user = this.authService.isLoggedIn();
		this.username = user ? user.displayName : 'New User';
	}

	getLesson(): void {
		const id = this.route.snapshot.paramMap.get('id');
		if(id) {
			this.lessonService.getLesson(id)
			.subscribe(lesson => {
				this.lesson = lesson;
			});
		}
	}

	userOptions: UserOptionObject[] = [
		{ value: 'edit', viewValue: 'Edit Details', event: (): void => { } },
		{ value: 'stats', viewValue: 'See Stats', event: (): void => { } },
		{ value: 'friends', viewValue: 'Compare Against Friends', event: (): void => { } },
		{ value: 'logout', viewValue: 'Log Out', event: (): void => { this.authService.logout() } }
	]

	ngOnInit() {
		this.getUser();
		this.getLesson();
	}

}
