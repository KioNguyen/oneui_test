import { Component, Input, OnInit } from '@angular/core';
import { VModalService } from '@vnpt/oneui-ui/modal';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { VFormTooltipIcon } from '@vnpt/oneui-ui/form';
import { Listing2Model } from '../../model/listing2_model';
import { Listing2Service } from '../../services/listing2.service';

@Component({
  selector: 'edit-view',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: string;
  @Input() data: Listing2Model;
  pageTitle: string = 'Tạo mới đánh giá';
  isEditMode: boolean = false;
  vOffsetBottom = 0;
  validateForm!: FormGroup;
  captchaTooltipIcon: VFormTooltipIcon = {
    type: 'Info',
    theme: 'twotone',
  };
  listOfData: Listing2Model[] = [];
  tabIndex = 0;

  switchNextTab(): void {
    this.tabIndex = this.tabIndex + 1;
  }
  switchPreviousTab(): void {
    this.tabIndex = this.tabIndex - 1;
  }

  constructor(
    private fb: FormBuilder,
    private modal: VModalService,
    private route: ActivatedRoute,
    private router: Router,
    private Listing2Service: Listing2Service
  ) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listOfData = this.Listing2Service.getData();
    this.dataSelected(this.id);
    this.validateForm = this.fb.group({
      id: [this.data.id, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      type: [this.data.type, [Validators.required]],
      des: [this.data.description, [Validators.required]],
    });

    // if (this.data) {
    //   this.isEditMode = true;
    //   this.pageTitle = 'Chỉnh sửa thông tin';
    //   this.validateForm.get('email').setValue(this.data.module_name);
    //   this.validateForm.get('nickname').setValue(this.data.name);
    //   this.validateForm.get('website').setValue(this.data.user_id);
    // }
  }
  dataSelected(id: string): void {
    if (id) {
      for (let i = 0; i < this.listOfData.length; i++) {
        if (this.listOfData[i].id == id) {
          this.data = this.listOfData[i];
        }
      }
    }
  }
}
