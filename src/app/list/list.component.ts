import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  todos=["Task 1","Task 2","Task 3"];
  task="";
  isfilled=false;

  AddTask(task:string)
  {
    this.todos=[...this.todos,task];
    this.task="";
    this.isfilled=false;
  }
  DeleteTask(task:string)
  {
    this.todos=this.todos.filter(todo=> todo!==task)
  }
  onChange(task:string)
  {
    if(task!="")
    {
      this.isfilled=true;
    }
    else
    this.isfilled=false;
  }
  ngOnInit(): void {
  }

}
