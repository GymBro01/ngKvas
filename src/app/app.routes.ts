import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TodoDetailsComponent } from './components/pages/todo-details/todo-details.component';
import { TodoComponent } from './components/pages/todo/todo.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"todos", component: TodoComponent},
    {path:"todos/:id", component:TodoDetailsComponent},
    {path:"about", component:AboutComponent},
    {path:"WTKVAS", component:NotFoundComponent}
];
