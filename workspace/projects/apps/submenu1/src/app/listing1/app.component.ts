import { Component, Input, OnInit } from '@angular/core';
import { VDrawerService } from '@vnpt/oneui-ui/drawer';
import { VModalService } from '@vnpt/oneui-ui/modal';
import { CreateComponent } from './create.component/create.component';
import { DetailComponent } from './detail.component/detail.component';
import { Listing1Model } from './model/listing1_model';
import { Listing1Service } from './services/listing1.service';

@Component({
  selector: 'app-list1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class Listing1Component implements OnInit {
  /* @Input() advanceSearch: boolean = false; */
  isCloseMenu: boolean = false;
  visible = false;

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: ReadonlyArray<Listing1Model> = [];
  listOfData: Listing1Model[] = [];
  setOfCheckedId = new Set<number>();
  isCloseSidebar = true;

  constructor(
    private listing1Service: Listing1Service,
    private drawerService: VDrawerService,
    private modal: VModalService
  ) {}

  ngOnInit(): void {
    this.listOfData = this.listing1Service.getData();
  }

  refresh() {}

  open(): void {}

  gotoDetal(isEdit: boolean, data: Listing1Model): void {}

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

  onCurrentPageDataChange($event: ReadonlyArray<Listing1Model>): void {
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
    this.drawerService.create<CreateComponent, { value: string }, string>({
      vContent: CreateComponent,
      vWidth: 500,
      vMaskStyle: { opacity: 0.2, animation: 'none' },
    });
  }

  editSelected(item: Listing1Model = null): void {
    //get current selected
    if (item) {
      this.drawerService.create<
        CreateComponent,
        { data: Listing1Model },
        string
      >({
        vContent: CreateComponent,
        vWidth: 500,
        vContentParams: {
          data: item,
        },
        vMaskStyle: { opacity: 0.2, animation: 'none' },
      });
    } else {
      let numberId: number = this.setOfCheckedId.values().next().value;
      for (let i = 0; i < this.listOfData.length; i++) {
        if (this.listOfData[i].id_incr == numberId) {
          this.drawerService.create<
            CreateComponent,
            { data: Listing1Model },
            string
          >({
            vContent: CreateComponent,
            vWidth: 500,
            vContentParams: {
              data: this.listOfData[i],
            },
            vMaskStyle: { opacity: 0.2, animation: 'none' },
          });
          break;
        }
      }
    }
  }

  confirmDelete(item: Listing1Model = null): void {
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

  deleteItem(item: Listing1Model) {}

  viewDetailSelected(): void {
    let numberId: number = this.setOfCheckedId.values().next().value;
    for (let i = 0; i < this.listOfData.length; i++) {
      if (this.listOfData[i].id_incr == numberId) {
        this.viewDetail(this.listOfData[i]);
        break;
      }
    }
  }

  viewDetail(item: Listing1Model) {
    const drawerRef = this.drawerService.create<
      DetailComponent,
      { data: Listing1Model },
      string
    >({
      vContent: DetailComponent,
      vWidth: 500,
      vContentParams: {
        data: item,
      },
      vMaskStyle: { opacity: 0.2, animation: 'none' },
    });

    drawerRef.afterClose.subscribe((data) => {
      if (typeof data === 'string') {
        let dataArr = data.split(':');
        if (dataArr && dataArr.length > 1) {
          let id: number = parseInt(dataArr[1]);
          let command = dataArr[0];
          switch (command) {
            case 'edit':
              this.clearSelected();
              this.setOfCheckedId.add(id);
              this.editSelected();
              break;
            case 'delete':
              this.clearSelected();
              this.setOfCheckedId.add(id);
              this.deleteSelected();
              break;

            default:
              break;
          }
        }
      }
    });
  }

  clearSelected(): void {
    this.setOfCheckedId.clear();
    this.checked = false;
    this.indeterminate = false;
  }
}
