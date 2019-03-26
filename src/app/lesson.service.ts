import { Injectable } from '@angular/core';
import { Lesson } from './lesson';
import { LESSONS } from './dummyDataList';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LessonService {

	constructor(public db: AngularFirestore) { }

	getLessons(): Observable<any> {
		return this.db.collection('lessons').snapshotChanges();
	}

	getLesson(id: string): Observable<any> {
		return this.db.collection('lessons').doc(id).snapshotChanges();
	}
}
