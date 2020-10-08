import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualHomeComponent } from './manual-home/manual-home.component';
import { CICDHomeComponent } from './cicdhome/cicdhome.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualHomeComponent,
    CICDHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
