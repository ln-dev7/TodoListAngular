import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'new',
    component: TodoCreateComponent,
  },
  {
    path: ':id/edit',
    component: TodoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
