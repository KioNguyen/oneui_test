import { Injectable } from '@angular/core';
import { Listing1Model } from '../model/listing1_model';
import { datas } from './fake_data';

@Injectable({
  providedIn: 'root',
})
export class Listing1Service {
  apps_data: Listing1Model[] = datas;

  constructor() {}

  getData(): Listing1Model[] {
    return this.apps_data;
  }

  deleteApp(listID: any) {
    for (let ID of listID) {
      this.apps_data = this.apps_data.filter((m) => m.id_incr != ID);
    }
  }
}
