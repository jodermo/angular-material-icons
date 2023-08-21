import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IconSelectComponent} from "./icon-select/icon-select.component";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { IconListComponent } from './icon-list/icon-list.component';
import {IconsService} from "./icons.service";
import { IconSearchComponent } from './icon-search/icon-search.component';
import { IconPreviewComponent } from './icon-preview/icon-preview.component';
import { IconCopyDialogComponent } from './icon-copy-dialog/icon-copy-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    IconSelectComponent,
    IconListComponent,
    IconSearchComponent,
    IconPreviewComponent,
    IconCopyDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [IconsService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
