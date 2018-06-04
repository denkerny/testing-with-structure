import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.css']
})
export class ProjectTaskComponent implements OnInit {

  @Input() project


  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  open(projectTask) {
    const modalRef = this.modalService.open(ProjectSubtaskList);
    modalRef.componentInstance.project = projectTask;
  }
}


@Component({
  selector: 'project-subtask-list',
  templateUrl: './project-subtask-list.html'
})

export class ProjectSubtaskList implements OnInit{
  constructor(public activeModal: NgbActiveModal){}

  @Input() project

  ngOnInit(){
    console.log(this.project.subtasks)
  }

}
