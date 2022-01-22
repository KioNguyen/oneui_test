import { Component, Input, OnInit } from '@angular/core';
import { VDrawerRef } from '@vnpt/oneui-ui/drawer';
import { VModalService } from '@vnpt/oneui-ui/modal';
import { Listing1Model } from '../../model/listing1_model';

@Component({
  selector: 'detail-view',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() data: Listing1Model;

  constructor(
    private drawerRef: VDrawerRef<string>,
    private modal: VModalService
  ) {}

  ngOnInit() {}

  runCommand(command: string): void {
    this.drawerRef.close(command);
  }

  confirmDelete(id: number) {
    this.modal.confirm({
      vTitle: 'Xác nhận?',
      vContent:
        '<b style="color: red;">Bạn có chắc chắn muốn xóa nội dung này?</b>',
      vOkText: 'Đồng ý',
      vOkType: 'primary',
      vOkDanger: true,
      vCancelText: 'Không',
      vOnOk: () => {
        //doing here
        this.runCommand('delete:' + id);
      },
    });
  }
}
