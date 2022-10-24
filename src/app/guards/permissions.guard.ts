import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginComponent } from '../componentes/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(
    private toastr: ToastrService,
    private login:LoginComponent
  ){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.login.getIdToken !==null){
      return true
    }
    this.toastr.error('Nope')
    return false;
  }
  hasUser():boolean{
    return false;
  }
}
