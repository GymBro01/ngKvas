import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  standalone: true
})

export class TodoComponent {
  constructor(private router:Router){}
  toDetails(id: number){
    this.router.navigate(['/todos', id]);
  }
  @Input() title='V';
  textColor="red";
}
