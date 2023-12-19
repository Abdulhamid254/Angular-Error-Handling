import { ErrorHandler, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CustomErrorHandlerService } from './app/custom-error-handler.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserAnimationsModule, HttpClientModule,MatSnackBarModule),

    {
      provide: ErrorHandler,
      useClass: CustomErrorHandlerService
    }]
})
  .catch(err => console.error(err));
