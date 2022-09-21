import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.hasUser()){
      return true
    }
    this.toastr.error('Nope')
    return false;
  }
  hasUser():boolean{
    return false;
  }

  constructor(
    private toastr: ToastrService,
  ){}
}
