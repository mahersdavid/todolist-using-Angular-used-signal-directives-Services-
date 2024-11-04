import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { tasks } from './task/task.model';
import { NewTaskComponent } from "../task/new-task/new-task.component";
import { NgIf } from '@angular/common';
import { newTask } from '../task/new-task/new-task.model';
import { TaskServive } from './tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required : true}) selectedId !: string
  @Input({required : true}) selectedName !: string
  isAddTaskVisible = false
  
// @Input() selectedId : string | undefined
  // private taskService = new TaskServive()

  constructor(private tasksService : TaskServive) {

  }

  get onSelectedTask(){
    return this.tasksService.getTaskofSelected(this.selectedId)
  }

  handleAddClcik() {
    this.isAddTaskVisible = true
  }

  setCanceled(){
    this.isAddTaskVisible = false
  }

}
