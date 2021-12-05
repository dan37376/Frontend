import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  hide = true;
  getdata:any={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    mobilenumber:'',
    age:'',
    sex:['male','female']
  }
  con:any={
    confirmpass:'',
  }
  ngOnInit(): void {
  }
  formSubmit(){

  }

}
