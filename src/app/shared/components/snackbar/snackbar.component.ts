import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

    /** The message to be shown in the snack bar. */
    public message: string;

    /** The label for the button in the snack bar. */
    public action: string;

    /** The instance of the component making up the content of the snack bar. */
    snackBarRef: MatSnackBarRef<SnackbarComponent>;

    constructor() {
        this.message = 'ABC';
        this.action = 'CLOSE';
    }

    /** If the action button should be shown. */
    get hasAction(): boolean { return !!this.action; }

    /** Dismisses the snack bar. */
    dismiss(): void {
        console.log('abc');
        this.snackBarRef.dismiss();
    }

    ngOnInit() {
    }

}
