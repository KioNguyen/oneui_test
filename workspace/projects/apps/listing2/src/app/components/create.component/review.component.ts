import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { VFormTooltipIcon } from '@vnpt/oneui-ui/form';

@Component({
  selector: 'review-register',
  template: `
    <p vnpt-typography class="mt-3">
      Vui lòng kiểm tra và xác nhận các thông tin sau là chính xác
    </p>
    <vnpt-descriptions
      *ngIf="step1 && step2"
      [vTitle]="'Thông tin khởi tạo ứng dụng'"
      vBordered
      class="tab-content"
    >
      <vnpt-descriptions-item vTitle="Email" [vSpan]="24">{{
        step1.controls['email'].value
          ? step1.controls['email'].value
          : 'Chưa nhập'
      }}</vnpt-descriptions-item>
      <vnpt-descriptions-item vTitle="Mật khẩu" [vSpan]="24">{{
        step1.controls['password'].value ? '********' : 'Chưa nhập'
      }}</vnpt-descriptions-item>
      <vnpt-descriptions-item vTitle="Tên đăng nhập" [vSpan]="24">{{
        step1.controls['nickname'].value
          ? step1.controls['nickname'].value
          : 'Chưa nhập'
      }}</vnpt-descriptions-item>
      <vnpt-descriptions-item vTitle="Số điện thoại" [vSpan]="24">{{
        step1.controls['phoneNumber'].value
          ? step1.controls['phoneNumber'].value
          : 'Chưa nhập'
      }}</vnpt-descriptions-item>
      <vnpt-descriptions-item vTitle="Website" [vSpan]="24">{{
        step1.controls['website'].value
          ? step1.controls['website'].value
          : 'Chưa nhập'
      }}</vnpt-descriptions-item>
      <vnpt-descriptions-item vTitle="Địa chỉ" [vSpan]="24">{{
        step2.controls['address'].value
          ? step2.controls['address'].value
          : 'Chưa nhập'
      }}</vnpt-descriptions-item>
      <vnpt-descriptions-item vTitle="CMND/CCCD" [vSpan]="24">{{
        step2.controls['cmnd'].value
          ? step2.controls['cmnd'].value
          : 'Chưa nhập'
      }}</vnpt-descriptions-item>
      <vnpt-descriptions-item vTitle="Ngày sinh" [vSpan]="24">{{
        step2.controls['birthday'].value
          ? (step2.controls['birthday'].value | date: 'dd/MM/yyyy')
          : 'Chưa nhập'
      }}</vnpt-descriptions-item>
    </vnpt-descriptions>
  `,
})
export class ReviewFormComponent implements OnInit {
  @Input() step1: FormGroup;
  @Input() step2: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
