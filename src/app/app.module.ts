import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgxDocViewerModule } from 'ngx-doc-viewer';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule,
    NgxDocViewerModule
  ],
  declarations: [AppComponent, DocViewerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
