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
		return this.db.collection('lessons', ref => ref.orderBy('order')).snapshotChanges();
	}

	getLesson(id: string): Observable<any> {
		return this.db.collection('lessons').doc(id).snapshotChanges();
	}

	getMostRecentLesson(): Observable<any> {
		return this.db.collection('lessons', ref => ref.orderBy('order', 'desc').limit(1)).snapshotChanges();
	}

	
}
