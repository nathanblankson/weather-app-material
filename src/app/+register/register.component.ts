import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

import { AuthDTO } from '@core/models';
import { RegisterRequest } from '@store/auth/auth.actions';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    show: boolean = false;

    constructor(private _fb: FormBuilder, private _store: Store) { }

    ngOnInit() {
        this.registerForm = this.initForm();
    }

    onRegister() {
        if (this.registerForm.invalid) {
            return;
        }
        const data: AuthDTO = this.registerForm.getRawValue();
        this._store.dispatch(new RegisterRequest({ data }));
    }

    private initForm(): FormGroup {
        return this._fb.group({
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            password: ["", Validators.required]
        });
    }

}
