import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  standalone: true
})
export class NotFoundComponent {
  @Input() title='S';
}
