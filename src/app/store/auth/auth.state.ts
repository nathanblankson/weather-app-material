import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { defaultAuthStateModel, AuthStateModel } from './auth.state.model';

@State<AuthStateModel>({
  name: 'Auth',
  defaults: defaultAuthStateModel
})
@Injectable()
export class AuthState {

}
