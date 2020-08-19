// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Other dependencies
import { Store } from '@ngxs/store';
import { LoginRequest } from '@store/auth/auth.actions';

// Other files
import { AuthDTO } from '@core/models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private _fb: FormBuilder, private _store: Store) { }

    ngOnInit() {
        this.loginForm = this.initForm();
    }

    onLogin() {
        if (this.loginForm.invalid) {
            return;
        }
        const data: AuthDTO = this.loginForm.getRawValue();
        this._store.dispatch(new LoginRequest({ data }));
    }

    private initForm(): FormGroup {
        return this._fb.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", Validators.required],
        });
    }
}
