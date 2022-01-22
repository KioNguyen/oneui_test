import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MyValidator {
  static DemoValidator(control: AbstractControl): ValidationErrors | null {
    return demoValid(control);
  }
}

export function demoValid(control: AbstractControl): ValidationErrors | null {
  if (control.value != null && control.value.startsWith(' ')) {
    return {
      trimError: { value: 'control has leading whitespace' },
    };
  }
  if (control.value != null && control.value.endsWith(' ')) {
    return {
      trimError: { value: 'control has trailing whitespace' },
    };
  }
  return null;
}
