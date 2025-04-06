import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TodoDetailsComponent } from './components/pages/todo-details/todo-details.component';
import { TodoComponent } from './components/pages/todo/todo.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"todos", loadComponent:
     ()=>import('./components/pages/todo/todo.component')
     .then(m=>m.TodoComponent)
    },
    {path:"about", component:AboutComponent},
    {path:"todos/:id", loadComponent:
    ()=>import('./components/pages/todo-details/todo-details.component')
    .then(m=>m.TodoDetailsComponent)},
    {path:"**", component:NotFoundComponent}
];
