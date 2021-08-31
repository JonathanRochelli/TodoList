import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item, Priority, State } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'My todo list';
  priorities = Object.keys(Priority)
  states = Object.keys(State)
  itemForm = new FormGroup({
    title: new FormControl(''),
    priority: new FormControl(''),
    state: new FormControl(''),
  });
  items : Item[] = []

  onSubmitForm(){
    this.items.push(this.itemForm.value)
  }




}
