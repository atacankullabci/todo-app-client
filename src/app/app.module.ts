import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {ItemComponent} from './item/item.component';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ItemFormComponent} from './item-form/item-form.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {ItemListComponent} from './item-list/item-list.component';
import {LoginComponent} from './shared/login/login.component';
import {LogoutComponent} from './shared/logout/logout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SessionStorageService} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ItemComponent,
    TodoComponent,
    ItemFormComponent,
    TodoListComponent,
    TodoFormComponent,
    ItemListComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
