import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private logInService:ServiceService,private route:Router) { }
private errorValue;
private ngForm;
  ngOnInit() {

  }
  logInUser(user){
    console.log("====");
    console.log(user.value.email,user.value.password);
    this.logInService.logInUserService(user.value.email,user.value.password).subscribe(
      res=>{
        localStorage.setItem("token",res.token)
        this.route.navigate(["/candidate"])
      },
      err=>{this.errorValue=err.error}
  )
 
  }
}
