import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupLoginComponent } from './components/form-group-login/form-group-login.component';
import { FormGroupRegisterComponent } from './components/form-group-register/form-group-register.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ServService} from './myService/serv.service';
import {MatListModule} from '@angular/material/list';


const appRoutes: Routes = [
    {path: 'login-page', component: FormGroupLoginComponent},
    {path: 'register-page', component: FormGroupRegisterComponent},
    {path: 'todo-page', component: TodoPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormGroupLoginComponent,
    FormGroupRegisterComponent,
    TodoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
        appRoutes,
        {enableTracing: true} // <-- debugging purposes only

    ),
      HttpClientModule,
      MatListModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
