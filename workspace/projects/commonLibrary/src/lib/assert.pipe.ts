import { Pipe, PipeTransform } from '@angular/core';
import { Utilities } from './utilities';

@Pipe({ name: 'assetUrl' })
export class AssetUrlPipe implements PipeTransform {
  transform(value: string): string {
    return Utilities.assetUrl(value);
  }
}
