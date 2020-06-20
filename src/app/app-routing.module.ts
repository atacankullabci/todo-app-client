import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {ItemFormComponent} from './item-form/item-form.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {ItemListComponent} from './item-list/item-list.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGuardService} from './authentication/auth-guard.service';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},

  {path: 'todo-list/todo-form', component: TodoFormComponent, canActivate: [AuthGuardService]},
  {path: 'todo-list', component: TodoListComponent, canActivate: [AuthGuardService]},
  {path: 'todo-form', component: TodoFormComponent, canActivate: [AuthGuardService]},
  {path: 'todo-list/item-list/:todoId/item-form', component: ItemFormComponent, canActivate: [AuthGuardService]},
  {path: 'todo-list/item-list/:todoId/item-form/:itemId/edit', component: ItemFormComponent, canActivate: [AuthGuardService]},
  {path: 'todo-list/item-list/:todoId', component: ItemListComponent, canActivate: [AuthGuardService]},
  {path: 'todo-form/:id/edit', component: TodoFormComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
