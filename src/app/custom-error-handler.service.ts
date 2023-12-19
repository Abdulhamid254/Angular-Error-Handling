import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {

  constructor(private snackbar: MatSnackBar) { }

  handleError(error: unknown) {
    this.snackbar.open(
      'Error was detected! We are already working on it !!',
      'Close',
      {
        duration: 2000
      }
    )
   console.warn(`Caught by custom Error Handler:`, error);

  }
}
