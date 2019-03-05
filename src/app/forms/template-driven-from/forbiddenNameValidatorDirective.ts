import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { forbiddenNameValidator } from '../customValidators';

@Directive({
    selector: 'appNameForbidden',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true}]
})
export class ForbiddenNameValidatorDirective implements Validator {
    @Input('appNameForbidden') forbiddenName: string;
    validate(control: AbstractControl): ValidationErrors {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control): null
    }
}