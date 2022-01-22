import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { VNotificationService } from '@vnpt/oneui-ui/notification';
import { AuthService, UserModel } from 'commonLibrary';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'login';
  passwordVisible = false;
  isLoading = false;
  inputValue = null;
  loginForm: FormGroup;
  errorMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private notification: VNotificationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    //check logged in
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    if (this.authService.isLogin()) {
      this.authService.backtoDashboard();
    }
  }
  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (!this.loginForm.invalid) {
      this.errorMsg = null;
      this.isLoading = true;
      if (
        this.loginForm.get('username').value === 'demo' &&
        this.loginForm.get('password').value === 'demo'
      ) {
        setTimeout(() => {
          this.isLoading = false;
          this.notification.success(
            'Thành công',
            'Xin chúc mừng, bạn đã đăng nhập thành công'
          );
          let userDetail: UserModel = {
            name: 'Tùng Hà',
            username: 'hadongtung',
            email: 'hadongtung@gmail.com',
            roleId: 1,
            roleName: 'Administrator',
            accessToken: 'token here',
          };
          this.authService.storeUserDetail(userDetail);
          this.authService.backtoDashboard();
        }, 1000);
      } else {
        setTimeout(() => {
          this.isLoading = false;
          this.errorMsg = 'Tên đăng nhập hoặc mật khẩu không chính xác';
        }, 1000);
      }
    }
  }
}
