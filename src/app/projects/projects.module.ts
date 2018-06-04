import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectTaskComponent, ProjectSubtaskList } from './project-task/project-task.component';
import { ProjectSubtaskListComponent } from './project-subtask-list/project-subtask-list.component';
import { ProjectTaskDetailsComponent } from './project-task-details/project-task-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  declarations: [ProjectsListComponent, ProjectTaskComponent, ProjectSubtaskListComponent, ProjectTaskDetailsComponent, ProjectSubtaskList],
  exports: [ProjectsListComponent, ProjectTaskComponent, ProjectSubtaskListComponent, ProjectTaskDetailsComponent],
  entryComponents: [ProjectSubtaskList]
})
export class ProjectsModule { }
