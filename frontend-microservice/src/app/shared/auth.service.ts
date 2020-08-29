import { Injectable } from '@angular/core';
import { SignupRequestPayload } from '../register/signup-request.payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequestPayload } from '../login/login-request.payload';
import { LoginResponse } from '../login/login-response.payload';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.http.post(
      'http://localhost:8761/register-service/api/auth/signup',
      signupRequestPayload,
      { responseType: 'text' }
    );
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.http
      .post<LoginResponse>(
        'http://localhost:8761/login-service/api/auth/login',
        loginRequestPayload
      )
      .pipe(
        map((data) => {
          this.localStorage.store(
            'authenticationToken',
            data.authenticationToken
          );
          this.localStorage.store('username', data.username);
          this.localStorage.store('refreshToken', data.refreshToken);
          this.localStorage.store('expiresAt', data.expiresAt);
          return true;
        })
      );
  }
}
