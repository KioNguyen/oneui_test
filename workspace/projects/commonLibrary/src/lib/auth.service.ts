import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Base, Cache } from '@vnpt/oneui-core';
import { Constants } from './constants';
import { UserModel } from './models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private origin: string;
  private apiURL: string;

  constructor(private http: HttpClient) {}

  /**
   * Login
   * @param email
   * @param password
   */
  login(email: string, password: string) {
    const obj = {
      username: email,
      password: password,
    };
    return this.http.post<string>(
      this.apiURL + `/auth/login`,
      JSON.stringify(obj)
    );
  }

  /***
   * check login mỗi lần vào ứng dụng
   * */
  public getUserInfo() {
    return this.http.get(this.apiURL + '/api/user/profile');
  }

  /**
   * Logout
   */

  public logout() {
    Cache.clearAll();
    setTimeout(() => {
      Base.navigateTo('/login');
    }, 300);
  }

  public errorPage(error_code: number, data: string) {
    Base.navigateTo(
      '/errorpage?error_code=' + error_code + "&message='" + data + "'"
    );
  }

  public backtoDashboard() {
    Base.navigateTo('/home');
  }

  public static checkLogin() {
    let accessToken = Cache.getCache(Constants.CACHE_TOKEN);
    if (!accessToken) {
      try {
        const currentUserStr = Cache.getCache(
          Constants.CACHE_USER_DETAIL,
          Cache.COOKIE
        );

        if (currentUserStr) {
          const currentUser = JSON.parse(currentUserStr);
          if (currentUser) {
            accessToken = currentUser.accessToken;
            if (accessToken) Cache.addCache(Constants.CACHE_TOKEN, accessToken);
          }
        }
      } catch (e) {}
    }
    if (!accessToken) Base.navigateTo('/login');
  }

  public isLogin(): boolean {
    if (this.getUserToken()) {
      return true;
    } else return false;
  }

  public getCurrentUser(): UserModel {
    try {
      const currentUserStr = Cache.getCache(
        Constants.CACHE_USER_DETAIL,
        Cache.COOKIE
      );

      if (currentUserStr) {
        const currentUser = JSON.parse(currentUserStr);
        return currentUser;
      }
    } catch (e) {}

    return null;
  }

  public storeUserDetail(obj: any, ttl: number = 60 * 60 * 1000) {
    Cache.addCache(
      Constants.CACHE_USER_DETAIL,
      JSON.stringify(obj),
      Cache.COOKIE,
      ttl
    );
  }

  public getUserToken(): string {
    let accessToken = Cache.getCache(Constants.CACHE_TOKEN);
    if (!accessToken) {
      const currentUser = this.getCurrentUser();
      if (currentUser) {
        accessToken = currentUser.accessToken;
        if (accessToken) Cache.addCache(Constants.CACHE_TOKEN, accessToken);
      }
    }
    return accessToken;
  }
}
