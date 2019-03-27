import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(private authService: AuthService,
				private router: Router ) { }

	message: string = '';

	googleLogin(): void {
		this.authService.signInWithGoogle()
			.then( response => {
				this.router.navigate(['home']);
			}).catch( err => {
				this.message = err.message;
			})
	}

	anonymousLogin(): void {
		this.authService.signInWithAnonymous()
			.then( response => {
				this.router.navigate(['home']);
			}).catch( err => {
				this.message = err.message;
			})
	}

	facebookLogin(): void {
		this.authService.signInWithFacebook()
			.then( response => {
				this.router.navigate(['home']);
			}).catch( err => {
				this.message = err.message;
			})
	}
}
