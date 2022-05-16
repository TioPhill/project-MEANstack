import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.services'

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService,
        private router: Router
    ){}
    
    canActivate(): boolean{
        if(this.authService.loggedIn()){
            return true;
        }
        this.router.navigate(['/autenticacao']);
        return false;
    }
        
    
    
}
  
