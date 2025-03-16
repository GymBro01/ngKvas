import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  imports: [],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss',
  standalone: true
})


export class TodoDetailsComponent {
  todoId: number|null = null;
  constructor(private route:ActivatedRoute){
    this.route.paramMap.subscribe(params=>{
      this.todoId=Number(params.get('id'));
    }
    );
  }
  @Input() title='A';
}
