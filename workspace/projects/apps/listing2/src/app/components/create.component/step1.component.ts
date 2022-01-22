import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { VFormTooltipIcon } from '@vnpt/oneui-ui/form';

@Component({
  selector: 'step1-register',
  template: `
    <p vnpt-typography class="mt-3">
      Vui lòng nhập các thông tin cơ bản vào form bên dưới trước khi đến các
      bước tiếp theo
    </p>
    <p vnpt-typography class="mt-4 pl-3 mb-4">
      (<span vnpt-typography vType="danger">*</span>) Là các trường bắt buộc
      phải nhập
    </p>
    <form vnpt-form [formGroup]="form" class="tab-content">
      <vnpt-form-item>
        <vnpt-form-label [vSm]="6" [vXs]="24" vRequired vFor="email"
          >E-mail</vnpt-form-label
        >
        <vnpt-form-control
          [vSm]="14"
          [vXs]="24"
          vErrorTip="The input is not valid E-mail!"
        >
          <input vnpt-input formControlName="email" id="email" />
        </vnpt-form-control>
      </vnpt-form-item>
      <vnpt-form-item>
        <vnpt-form-label [vSm]="6" [vXs]="24" vFor="password" vRequired
          >Mật khẩu</vnpt-form-label
        >
        <vnpt-form-control
          [vSm]="14"
          [vXs]="24"
          vErrorTip="Please input your password!"
        >
          <input
            vnpt-input
            type="password"
            id="password"
            formControlName="password"
            (ngModelChange)="updateConfirmValidator()"
          />
        </vnpt-form-control>
      </vnpt-form-item>
      <vnpt-form-item>
        <vnpt-form-label [vSm]="6" [vXs]="24" vFor="checkPassword" vRequired
          >Xác nhận mật khẩu</vnpt-form-label
        >
        <vnpt-form-control [vSm]="14" [vXs]="24" [vErrorTip]="errorTpl">
          <input
            vnpt-input
            type="password"
            formControlName="checkPassword"
            id="checkPassword"
          />
          <ng-template #errorTpl let-control>
            <ng-container *ngIf="control.hasError('required')">
              Please confirm your password!
            </ng-container>
            <ng-container *ngIf="control.hasError('confirm')">
              Two passwords that you enter is inconsistent!
            </ng-container>
          </ng-template>
        </vnpt-form-control>
      </vnpt-form-item>
      <vnpt-form-item>
        <vnpt-form-label
          [vSm]="6"
          [vXs]="24"
          vFor="nickname"
          vRequired
          vTooltipTitle="What do you want other to call you"
        >
          <span>Tên đăng nhập</span>
        </vnpt-form-label>
        <vnpt-form-control
          [vSm]="14"
          [vXs]="24"
          vErrorTip="Please input your nickname!"
        >
          <input vnpt-input id="nickname" formControlName="nickname" />
        </vnpt-form-control>
      </vnpt-form-item>
      <vnpt-form-item>
        <vnpt-form-label [vSm]="6" [vXs]="24" vFor="phoneNumber" vRequired
          >Số điện thoại</vnpt-form-label
        >
        <vnpt-form-control
          [vSm]="14"
          [vXs]="24"
          [vValidateStatus]="form.controls['phoneNumber']"
          vErrorTip="Please input your phone number!"
        >
          <vnpt-input-group [vAddOnBefore]="addOnBeforeTemplate">
            <ng-template #addOnBeforeTemplate>
              <vnpt-select
                formControlName="phoneNumberPrefix"
                class="phone-select"
              >
                <vnpt-option vLabel="+84" vValue="+84"></vnpt-option>
              </vnpt-select>
            </ng-template>
            <input
              formControlName="phoneNumber"
              id="'phoneNumber'"
              vnpt-input
            />
          </vnpt-input-group>
        </vnpt-form-control>
      </vnpt-form-item>
      <vnpt-form-item>
        <vnpt-form-label [vSm]="6" [vXs]="24" vFor="website" vRequired
          >Website</vnpt-form-label
        >
        <vnpt-form-control
          [vSm]="14"
          [vXs]="24"
          vErrorTip="Please input website!"
        >
          <input
            vnpt-input
            id="website"
            formControlName="website"
            placeholder="website"
          />
        </vnpt-form-control>
      </vnpt-form-item>
    </form>
  `,
})
export class Step1FormComponent implements OnInit {
  form: FormGroup;

  submitForm(): void {}

  validateForm(): boolean {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    return !this.form.invalid;
  }

  getForm() {
    return this.form;
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.form.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+84'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
    });
  }
}
