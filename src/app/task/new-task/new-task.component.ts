import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from './new-task.model';
import { TaskServive } from '../../tasks/tasks.services';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input({required : true}) userId !: string
@Output() Canceled = new EventEmitter<void>()
// @Output() add = new EventEmitter<newTask>()

enteredTitle = ''
enteredSummary = ''
enteredDate = ''

private tasksService = inject(TaskServive)

handleCancelClick() {
  this.Canceled.emit()
}

onSubmit(){
this.tasksService.updateTaskTable({
  title : this.enteredTitle,
   summary : this.enteredSummary,
    date : this.enteredDate,
},
this.userId
)
this.Canceled.emit()
}

// onSubmit(){
//   this.add.emit({
//     title : this.enteredTitle,
//     summary : this.enteredSummary,
//     date : this.enteredDate,
//   })
// }
}
