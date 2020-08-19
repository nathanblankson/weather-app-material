import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Store } from '@ngxs/store';
import { SnackbarClose } from '../../../store/snackbar';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

    public message: string;
    public action: string;

    private snackBarRef: MatSnackBarRef<SnackbarComponent>;

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, private _store: Store) { }

    get hasAction(): boolean { return !!this.action; }

    onClickAction(): void {
        this._store.dispatch(new SnackbarClose());
    }

    ngOnInit() {
        this.message = this.data.message;
        this.action = this.data.action;
    }

}
