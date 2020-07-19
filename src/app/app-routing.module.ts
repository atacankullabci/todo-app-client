import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {ItemFormComponent} from './item-form/item-form.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {ItemListComponent} from './item-list/item-list.component';
import {LoginComponent} from './shared/login/login.component';
import {LogoutComponent} from './shared/logout/logout.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},

  {path: 'todo-list/todo-form', component: TodoFormComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'todo-form', component: TodoFormComponent},
  {path: 'todo-list/item-list/:todoId/item-form', component: ItemFormComponent},
  {path: 'todo-list/item-list/:todoId/item-form/:itemId/edit', component: ItemFormComponent},
  {path: 'todo-list/item-list/:todoId', component: ItemListComponent},
  {path: 'todo-form/:id/edit', component: TodoFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
