import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private http:ServiceService, private router:Router){}

    canActivate():boolean{
      if(this.http.isLoggedIn()){
        return true;
      }
      else{
        this.router.navigate(['/candidate'])
        return false
      }
    }
  
}
