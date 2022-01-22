import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '@vnpt/oneui-core';

@Pipe({ name: 'usernamePipe' })
export class UsernamePipe implements PipeTransform {
  transform(value: string): string {
    let name: string = Utils.getTextByName(value);
    if (!name || name === '') name = 'NO';
    return name;
  }
}
