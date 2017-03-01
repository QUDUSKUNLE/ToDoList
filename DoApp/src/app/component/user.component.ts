import { Component } from '@angular/core';


@Component({
  selector: 'user',
  templateUrl: '../component/user.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class UserComponent {
  title: string;
  address: address;
  i: number;
  user: user;
  showForm: Boolean = false;
  showTable: Boolean = false;
  editForm: Boolean = false;
  Data: any[];

  //value = new Data;
  constructor(){
    this.title = 'ToDoList',
    this.address = {
      street: 'Plot 384, J.F Kennedy Street',
      city: 'FCT',
      state: 'Abuja'
    }
    this.user =  {
      no: 1,
      task: '',
      email: '',
      description: "", 
 }
 this.Data = [];
}
 // Create a Task
 createTask(){
   this.showForm = true;
   this.showTable = false;
 }
 // View tasks
 viewTasks(){
   this.showTable = true;
 }
 // Ok View viewTasks
Ok(){
  this.showTable = false;
}
// Submit Task
 onSubmit(value){
   this.showForm = false;
   this.showTable = true;
   this.Data.push(value);
   console.log(this.Data);
 }

 // Edit Task

 editTask(value){
   this.editForm = true;
   this.showTable = false;
   console.log(value)
 }
 
}

// interface
interface address {
    street: string; 
    city: string;
    state: string;
  }
interface user {
  no: Number;
  task: string;
  email: string;
  description: string;
}

  


