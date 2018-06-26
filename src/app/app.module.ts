import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ListSnippetsComponent } from './list-snippets/list-snippets.component';
import { AddSnippetsComponent } from './add-snippets/add-snippets.component';
import { DeleteComponent } from './delete-snippets/delete-snippets.component';
import { ViewComponent } from './view-snippets/view-snippets.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSnippetsComponent,
    AddSnippetsComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
