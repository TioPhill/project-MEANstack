import {Routes, RouterModule} from '@angular/router';
import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';
import { AUTH_ROUTES } from './auth/auth.routers';
import {AuthGuard} from './guards/auth.guard';


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/message', pathMatch: 'full', canActivate:[AuthGuard]},
    {path: 'message', component: MessagesComponent, canActivate:[AuthGuard]},
    {path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);
