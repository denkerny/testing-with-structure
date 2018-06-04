import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubtaskListComponent } from './project-subtask-list.component';

describe('ProjectSubtaskListComponent', () => {
  let component: ProjectSubtaskListComponent;
  let fixture: ComponentFixture<ProjectSubtaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSubtaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSubtaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
