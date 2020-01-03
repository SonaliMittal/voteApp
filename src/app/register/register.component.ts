import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { log } from 'util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:ServiceService, private router:Router) { }

  ngOnInit() {
  }
  registerUser(user){
    console.log("====");
    console.log(user.value.email,user.value.password);
    this.registerService.registerUserInService(user.value.email,user.value.password).subscribe(
      res=>{
        localStorage.setItem("token",res.token)
        this.router.navigate(['/login'])
    },
      err=>console.log(err)
  )
  }
}
