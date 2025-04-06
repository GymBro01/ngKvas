import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

export interface RegForm {
  userName: string,
  password: string,
  email: string
}

@Component({
  selector: 'app-register-form',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  @Output() Regestration = new EventEmitter<RegForm>();

  regForm: FormGroup<{ userName: FormControl<string>; password: FormControl<string>; email: FormControl<string> }> = new FormGroup({
    userName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3), Validators.maxLength(15)] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(8), Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] })
});
onSubmit() {
  if (this.regForm.valid) {
    this.Regestration.emit(this.regForm.getRawValue());
  }
}
}