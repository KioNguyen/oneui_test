import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Base } from '@vnpt/oneui-core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService) {}
  canActivate(): boolean {
    if (!this.auth.isLogin()) {
      setTimeout(() => {
        Base.navigateTo('/login');
      }, 100);
      return false;
    }
    return true;
  }
}
