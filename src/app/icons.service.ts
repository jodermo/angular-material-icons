import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {MatIcons} from "./icons/mat-icons";
import {IconCopyDialogComponent} from "./icon-copy-dialog/icon-copy-dialog.component";

export interface IconCategory {
  name: string;
  icons: any[];
}

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  iconCategories = MatIcons.categories;
  availableCategories: any[] = [];
  searchQuery?: string;
  iconsCount = 0;


  selectedIcon?: any;
  label = 'Icon';
  searchLabel = 'Search';

  onSelectIcon = new EventEmitter<string>();
  onChooseIcon = new EventEmitter<string>();
  copyDialogComponent?: IconCopyDialogComponent;
  previewIcon?: any;

  constructor() {
  }

  ngOnInit(): void {
    this.changeSearchQuery();
  }

  changeSearchQuery() {
    const availableCategories: any[] = [];
    this.iconCategories.map((iconCategory) => {
      let addedCategory: any = undefined;
      if (!this.searchQuery) {
        addedCategory = iconCategory;
        availableCategories.push(iconCategory);
      } else if (iconCategory.name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
        addedCategory = iconCategory;
        availableCategories.push(iconCategory);
      }
      if (iconCategory !== addedCategory) {
        const categoryClone = Object.assign({}, iconCategory);
        categoryClone.icons = iconCategory.icons.filter(icon => this.searchQuery ? icon.name.toLowerCase().includes(this.searchQuery.toLowerCase()) : true);
        if (categoryClone.icons.length) {
          availableCategories.push(categoryClone);
        }
      }
    });
    this.availableCategories = availableCategories;
    this.iconsCount = 0;
    for (const iconCategory of this.availableCategories) {
      this.iconsCount += iconCategory.icons.length;
    }
  }

  chooseIcon() {
    if (this.selectedIcon) {
      this.previewIcon = this.selectedIcon;
      this.onChooseIcon.emit(this.selectedIcon);
      this.copyToClipBoard(this.iconHTML(this.previewIcon));
      this.initSelection();
    }
  }

  initSelection() {
    this.searchQuery = undefined;
    this.changeSearchQuery();
  }

  onChange() {
    this.onSelectIcon.emit(this.selectedIcon);
  }

  selectIcon(icon: any) {
    this.selectedIcon = icon;
    this.previewIcon = icon;
    this.chooseIcon();
  }

  iconHTML(icon: any) {
    return `<mat-icon>${icon.ligature}</mat-icon>`;
  }

  copyToClipBoard(text: string) {

    // Copy the text inside the text field
    navigator.clipboard.writeText(text);


    // Alert the copied text
    setTimeout(() => {
      const dialogTitle = "copied to clipboard";
      if (this.copyDialogComponent) {
        this.copyDialogComponent.title = dialogTitle;
        this.copyDialogComponent.text = text;
        this.copyDialogComponent.openDialog();
      } else {
        alert(text  + ': \n' + dialogTitle);
      }

    }, 0);

  }
}
