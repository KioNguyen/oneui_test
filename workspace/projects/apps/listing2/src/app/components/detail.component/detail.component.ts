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
  selector: 'detail-view',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() data: Listing2Model;
  listOfData: Listing2Model[] = [];
  setOfCheckedId = new Set<number>();
  id: string;
  pageTitle: string = 'Tạo mới đánh giá';
  isEditMode: boolean = false;
  vOffsetBottom = 0;
  validateForm!: FormGroup;
  captchaTooltipIcon: VFormTooltipIcon = {
    type: 'Info',
    theme: 'twotone',
  };

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

  gotoEditPage(): void {
    this.router.navigateByUrl(`/${this.id}/edit`);
  }

  confirmDelete() {
    this.modal.confirm({
      vTitle: 'Xác nhận?',
      vContent:
        '<b style="color: red;">Bạn có chắc chắn muốn xóa ứng dụng này?</b>',
      vOkText: 'Đồng ý',
      vOkType: 'primary',
      vOkDanger: true,
      vCancelText: 'Không',
      vOnOk: () => {
        //doing here
        // this.gotoEditPage();
      },
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listOfData = this.Listing2Service.getData();
    this.dataSelected(this.id);
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+84'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      agree: [false],
    });

    if (this.data) {
      this.isEditMode = true;
      this.pageTitle = 'Chỉnh sửa thông tin';
      this.validateForm.get('email').setValue(this.data.module_name);
      this.validateForm.get('nickname').setValue(this.data.name);
      this.validateForm.get('website').setValue(this.data.user_id);
    }
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
