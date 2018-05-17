import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  today = Date.now()

  tasks: any[] = [
    'aesacmi',
    'posprzątaj pokój'
  ]

  addItem(input: HTMLInputElement) {
    this.tasks.splice(0,0,input.value)
    input.value = ''
  }

  removeItem(item) {
    let index = this.tasks.indexOf(item)
    this.tasks.splice(index, 1)
  }

  

}
