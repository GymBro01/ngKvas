import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

export interface TaskForm {
  title: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<TaskForm>();

  taskForm: FormGroup<{ title: FormControl<string>; isCompleted: FormControl<boolean> }> = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5)] }),
    isCompleted: new FormControl(false, { nonNullable: true })
  });

  onSubmit() {
    if (this.taskForm.valid) {
      this.addTask.emit(this.taskForm.getRawValue());
      this.taskForm.reset({ title: '', isCompleted: false });
    }
  }
}