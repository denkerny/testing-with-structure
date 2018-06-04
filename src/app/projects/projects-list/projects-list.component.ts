import { Component, OnInit } from '@angular/core';
import { rotateImg } from '../animations';
import { PROJECTS } from '../projects-mock';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  animations: [
    rotateImg
]
})
export class ProjectsListComponent implements OnInit {
  
  projectList = PROJECTS

  state: string
  activeIds: string[]
  selectedIndex: number = null

  rotate(index: number) {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
      this.selectedIndex = index;
      console.log(this.selectedIndex, this.state)
  }

  
  constructor() { }

  ngOnInit() {
    this.countActiveIds();
  }

  countActiveIds(){
    let arr = [];
    for(let i = 0; i < this.projectList.length; i++){
      let str = 'ngb-panel-' + i;
      arr.push(str)
    }
    return this.activeIds = arr;
  }
}
