import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegiComponent } from './regi/regi.component';
import { ValidationFormExampleComponent } from './validation-form-example/validation-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    RegiComponent,
    ValidationFormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
