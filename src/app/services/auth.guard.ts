import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate {

  session: any

  constructor(



    private router: Router) { }

  canActivate(

): boolean | Promise<boolean> {

    this.session = localStorage.getItem('temp');

    debugger

    //var isAuthenticated = this.session;

    if (this.session != "1" || this.session == undefined  ) {

      this.router.navigate(['/Login']);

      return false;

    }

    else {

      return true;

    }

  }


}
