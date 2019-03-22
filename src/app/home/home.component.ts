import { Component, OnInit } from '@angular/core';

export interface UserOption {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  opened: boolean;

  title: string = 'TheLessonBox';
  username: string = 'Andrew';
  progress: number = 25;

  userOptions: UserOption[] = [
    { value: 'edit', viewValue: 'Edit Details' },
    { value: 'stats', viewValue: 'See Stats' },
    { value: 'friends', viewValue: 'Compare Against Friends' },
    { value: 'logout', viewValue: 'Log Out'}
  ]

  ngOnInit() {
  }

}
