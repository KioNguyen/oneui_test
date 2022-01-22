import { Injectable } from '@angular/core';
import { Listing2Model } from '../model/listing2_model';
import { datas } from './fake_data';

@Injectable({
  providedIn: 'root',
})
export class Listing2Service {
  apps_data: Listing2Model[] = datas;

  constructor() {}

  getData(): Listing2Model[] {
    return this.apps_data;
  }

  deleteApp(listID: any) {
    for (let ID of listID) {
      this.apps_data = this.apps_data.filter((m) => m.id_incr != ID);
    }
  }
}
