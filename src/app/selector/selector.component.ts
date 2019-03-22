import { Component, OnInit } from '@angular/core';
import { LESSONS } from '../dummyDataList';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor() { }

  lessons = LESSONS

  ngOnInit() {
  }

}
