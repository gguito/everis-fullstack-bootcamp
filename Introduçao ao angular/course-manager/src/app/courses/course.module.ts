import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RatingModule } from '../shared/component/rating/rating.module';
import { AppPipeModule } from '../shared/pipe/module.pipe';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ],
})
export class CourseModule {

}
