import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
    submitButton=false;
    emailId="";
    emailError='';
    passwordError='';
    password="";
  constructor() { 
   
  }

  ngOnInit(): void {
  }
  Emailupdate(event:Event){
    this.emailId=(<HTMLInputElement>event.target).value;
    if(this.emailId===''||this.emailId===" ")
    {
      this.emailError='Invalid Data';
    }
    else{
      this.emailError='';
      this.buttonEnable();
    }

  }
  Passwordupdate(event:Event){
    this.password=(<HTMLInputElement>event.target).value;
    if(this.password===''||this.password===" ")
    {
      this.passwordError='Invalid Data';
    }
    else if(this.password.length<8){
      this.passwordError='Password must be atlest 8 char';
    }
    else{
      this.passwordError='';
     this.buttonEnable();
    }

    
  }
  buttonEnable(){
    if(this.emailError===''&&this.passwordError===""&&this.emailId!==""&&this.password!==""){
      this.submitButton=true;
    }
    else{
      this.submitButton=false;
    }
  }
  

}
