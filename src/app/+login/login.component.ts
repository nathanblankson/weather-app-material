import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { LoginRequest } from '@store/auth/auth.actions';

import { AuthDTO } from '@core/models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private _fb: FormBuilder, private _store: Store) { }

    ngOnInit() {
        this.loginForm = this.initForm();
    }

    onLogin() {
        if (this.loginForm.invalid) {
            return;
        }
        const payload: AuthDTO = this.loginForm.getRawValue();
        this._store.dispatch(new LoginRequest(payload));
    }

    private initForm(): FormGroup {
        return this._fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required],
        });
    }
}
