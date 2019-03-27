import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private afAuth: AngularFireAuth,
				private router: Router) {
		this.user = afAuth.authState;

		this.user.subscribe( user => {
			if (user) {
				this.userDetails = user;
			} else {
				this.userDetails = null;
			}
		})
	}

	private user: Observable<firebase.User>;
	userDetails;
	public message: string = '';

	signInWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider();
		return this.afAuth.auth.signInWithPopup(provider);
	}

	signInWithAnonymous() {
		return this.afAuth.auth.signInAnonymously()
	}

	signInWithFacebook() {
		let provider = new firebase.auth.FacebookAuthProvider();
		return this.afAuth.auth.signInWithPopup(provider)
	}

	isLoggedIn() {
		return this.userDetails ? this.userDetails : false;
	}

	logout() {
		this.afAuth.auth.signOut()
			.then( () => {
				this.router.navigate(['login']);
			}).catch( err => {
				console.log(err);
			})
	}
}
