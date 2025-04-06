import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
importProvidersFrom(ReactiveFormsModule);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
