import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type tasks } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskServive } from '../tasks.services';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) tasksObj!: tasks;

  private taskService = inject(TaskServive);

  handleCancelClick() {
    this.taskService.deleteTaskofSelected(this.tasksObj.id);
  }
}
