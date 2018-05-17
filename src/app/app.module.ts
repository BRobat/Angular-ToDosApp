import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FinishedComponent } from './finished/finished.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FinishedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'todos', component: TodosComponent },
      { path: 'finished', component: FinishedComponent },
    ])   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
