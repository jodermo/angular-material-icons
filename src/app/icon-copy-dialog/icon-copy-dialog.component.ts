import {Component, Inject, OnInit} from '@angular/core';
import {IconsService} from "../icons.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

export interface DialogData {
  title: string;
  text: string;
}

@Component({
  selector: 'app-icon-copy-dialog',
  template: '',
  styleUrls: ['./icon-copy-dialog.component.scss']
})
export class IconCopyDialogComponent implements OnInit {
  title?: string;
  text?: string;

  constructor(public icons: IconsService, public dialog: MatDialog) {
    icons.copyDialogComponent = this;
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {title: this.title, text: this.text},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.text = result;
    });
  }
}



@Component({
  selector: 'app-copy-dialog',
  templateUrl: 'icon-copy-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
