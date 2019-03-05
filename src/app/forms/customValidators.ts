import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
        let forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': control.value } : null;
    };
}