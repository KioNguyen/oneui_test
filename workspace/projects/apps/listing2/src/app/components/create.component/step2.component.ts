import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { VFormTooltipIcon } from '@vnpt/oneui-ui/form';

@Component({
  selector: 'step2-register',
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
        <vnpt-form-label [vSm]="6" [vXs]="24" vFor="address"
          >Địa chỉ</vnpt-form-label
        >
        <vnpt-form-control
          [vSm]="14"
          [vXs]="24"
          vErrorTip="The input is not valid E-mail!"
        >
          <input vnpt-input formControlName="address" id="address" />
        </vnpt-form-control>
      </vnpt-form-item>
      <vnpt-form-item>
        <vnpt-form-label [vSm]="6" [vXs]="24" vFor="password" vRequired
          >CMND/CCCD</vnpt-form-label
        >
        <vnpt-form-control
          [vSm]="14"
          [vXs]="24"
          vErrorTip="Please input your password!"
        >
          <input vnpt-input formControlName="cmnd" id="cmnd" />
        </vnpt-form-control>
      </vnpt-form-item>
      <vnpt-form-item>
        <vnpt-form-label [vSm]="6" [vXs]="24" vFor="birthday" vRequired
          >Ngày sinh</vnpt-form-label
        >
        <vnpt-form-control
          [vSm]="14"
          [vXs]="24"
          [vErrorTip]="'Vui lòng nhập thông tin ngày sinh'"
        >
          <vnpt-date-picker formControlName="birthday"></vnpt-date-picker>
        </vnpt-form-control>
      </vnpt-form-item>
    </form>
  `,
})
export class Step2FormComponent implements OnInit {
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      address: [null, []],
      cmnd: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
    });
  }
}
