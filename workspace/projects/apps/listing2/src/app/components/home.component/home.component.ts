import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VDrawerService } from '@vnpt/oneui-ui/drawer';
import { VModalService } from '@vnpt/oneui-ui/modal';
import { CreateComponent } from '../create.component/create.component';
import { DetailComponent } from '../detail.component/detail.component';
import { Listing2Model } from '../../model/listing2_model';
import { Listing2Service } from '../../services/listing2.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isCloseMenu: boolean = false;
  visible = false;

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: ReadonlyArray<Listing2Model> = [];
  listOfData: Listing2Model[] = [];
  setOfCheckedId = new Set<number>();
  isCloseSidebar = true;

  constructor(
    private router: Router,
    private Listing2Service: Listing2Service,
    private drawerService: VDrawerService,
    private modal: VModalService
  ) {}

  ngOnInit(): void {
    this.listOfData = this.Listing2Service.getData();
  }

  refresh() {}

  open(): void {}

  gotoDetal(isEdit: boolean, data: Listing2Model): void {}

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id_incr, value)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: ReadonlyArray<Listing2Model>): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id_incr)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id_incr)
      ) && !this.checked;
  }

  deleteApp() {}

  createBasicMessage(): void {}

  showDeleteConfirm(): void {}

  runCommand($event: any) {
    switch ($event) {
      case 'create':
        this.createNew();
        break;
      case 'view':
        this.viewDetailSelected();
        break;
      case 'edit':
        this.editSelected();
        break;
      case 'delete':
        this.confirmDelete();
        break;
      case 'clearSelect':
        this.clearSelected();
        break;
      default:
        break;
    }
  }

  createNew(): void {
    this.router.navigate(['/create']);
  }

  editSelected(item: Listing2Model = null): void {
    //get current selected
    if (item) {
      this.router.navigateByUrl(`/${item.id}/edit`);
    } else {
      let numberId: number = this.setOfCheckedId.values().next().value;
      for (let i = 0; i < this.listOfData.length; i++) {
        if (this.listOfData[i].id_incr == numberId) {
          let item = this.listOfData[i];
          this.router.navigateByUrl(`/${item.id}/edit`);
        }
      }
    }
  }

  confirmDelete(item: Listing2Model = null): void {
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
        if (item) this.deleteItem(item);
        else this.deleteSelected();
      },
    });
  }

  deleteSelected(): void {}

  deleteItem(item: Listing2Model) {}

  viewDetailSelected(): void {
    let numberId: number = this.setOfCheckedId.values().next().value;
    for (let i = 0; i < this.listOfData.length; i++) {
      if (this.listOfData[i].id_incr == numberId) {
        this.viewDetail(this.listOfData[i]);
        break;
      }
    }
  }

  viewDetail(item: Listing2Model) {
    this.router.navigateByUrl(`/${item.id}`);
  }

  clearSelected(): void {
    this.setOfCheckedId.clear();
    this.checked = false;
    this.indeterminate = false;
  }
}
