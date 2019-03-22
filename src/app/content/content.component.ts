import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  content = {
    title: 'Lesson One',
    body: 'This is some text for my new lesson',
    example: 'Build an Array',
    description: 'Build a Simple Javascript Array'
  }

  ngOnInit() {
  }

}
