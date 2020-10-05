import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgrxFormsModule } from 'ngrx-forms';
import { EditorComponent } from './editor/editor.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NZ_I18N, en_US } from 'ng-zorro-antd';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgrxFormsModule,
    StoreModule.forRoot({data: reducer}),
    NgZorroAntdModule,
    AgGridModule
    // .withComponents([EditorComponent])
  ],
  declarations: [ AppComponent, HelloComponent, EditorComponent ],
  entryComponents: [EditorComponent],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class AppModule { }
