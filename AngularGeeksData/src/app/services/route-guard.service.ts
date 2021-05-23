import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { UserAuthService } from './user-auth.service';
import { Emitters } from '../emitters/emitters';
@Injectable({
  providedIn: 'root'
})

export class RouteGuardService implements CanActivate {
  islogedin: boolean;
  constructor(private auth_service: UserAuthService,
              private router: Router
    ) {

    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      return true
  }
}
