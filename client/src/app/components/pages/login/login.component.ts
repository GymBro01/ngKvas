import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, Form } from '@angular/forms';

export interface LogForm
{
  user: string,
  password: string
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() login = new EventEmitter<LogForm>();

  logForm:FormGroup<{user: FormControl<string>; password: FormControl<string>}> 
  = new FormGroup({user: new FormControl('', {nonNullable:true, validators:[Validators.required]}), password: new FormControl('', {nonNullable:true, validators:[Validators.required]})});

  onSubmit()
  {
    
  }
}
