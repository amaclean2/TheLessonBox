import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import { Lesson } from '../lesson';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor(private lessonService: LessonService) { }

  lessons: Array<any>;

  getLessons(): void {
    this.lessonService.getLessons()
      .subscribe(lessons => {
        this.lessons = lessons.reverse();
      });
  }

  ngOnInit() {
    this.getLessons();
  }

}
