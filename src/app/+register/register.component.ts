import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

import { AuthDTO } from '@core/models';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private _fb: FormBuilder, private _store: Store) { }

    ngOnInit() {
        this.registerForm = this.initForm();
    }

    onRegister() {
        if (this.registerForm.invalid) {
            return;
        }
        const data: AuthDTO = this.registerForm.getRawValue();
        // this._store.dispatch(new LoginRequest({ data }));
    }

    private initForm(): FormGroup {
        return this._fb.group({
            firstname: ["", Validators.required],
            lastname: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required],
            passwordConfirmation: ["", Validators.required],
        });
    }

}
