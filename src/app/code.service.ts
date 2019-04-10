import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let httpOptions = new HttpHeaders({
	'Content-Type': 'application/json',
	'Access-Control-Allow-Headers': '*'
});

@Injectable({
	providedIn: 'root'
})
export class CodeService {

	constructor(private afStorage: AngularFireStorage,
		private http: HttpClient) { }

	getCode(filename: string): void {

		const ref = this.afStorage.ref(`Exercises/${filename}`);
		ref.getDownloadURL()
			.subscribe(fileUrl => {
				this.http.get(fileUrl, { headers: httpOptions })
					.subscribe( resp => {
						console.log(resp);
					})
			})
	}
}