import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

import { VFormTooltipIcon } from '@vnpt/oneui-ui/form';
import { Listing2Model } from '../../model/listing2_model';
import { Step1FormComponent } from './step1.component';
import { Step2FormComponent } from './step2.component';
import { Base } from '@vnpt/oneui-core';

@Component({
  selector: 'create-view',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  curentStep: number = 0;
  position: number = 0;
  @ViewChild(Step1FormComponent)
  step1: Step1FormComponent;

  @ViewChild(Step2FormComponent)
  step2: Step2FormComponent;

  constructor(private location: Location, private fb: FormBuilder) {}

  ngOnInit(): void {}

  switchNextTab(): void {
    switch (this.curentStep) {
      case 0:
        //check validation
        if (this.step1.validateForm()) this.curentStep++;
        break;
      case 1:
        //check validation
        if (this.step2.validateForm()) this.curentStep++;
        break;

      default:
        this.curentStep++;
        break;
    }
  }

  switchPreviousTab(): void {
    this.curentStep = this.curentStep - 1;
  }

  createClick() {
    if (this.step1.form.invalid) {
      this.curentStep = 0;
      Base.showToast(
        'Vui lòng nhập đủ các thông tin trước khi khởi tạo',
        Base.TOAST_ERROR
      );
    } else if (this.step2.form.invalid) {
      this.curentStep = 1;
      Base.showToast(
        'Vui lòng nhập đủ các thông tin trước khi khởi tạo',
        Base.TOAST_ERROR
      );
    }
  }
}
