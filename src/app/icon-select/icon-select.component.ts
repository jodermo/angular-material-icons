import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IconsService} from "../icons.service";
import {IconListComponent} from "../icon-list/icon-list.component";

@Component({
  selector: 'app-icon-select',
  templateUrl: './icon-select.component.html',
  styleUrls: ['./icon-select.component.scss']
})
export class IconSelectComponent extends IconListComponent{



  @Input() label = 'Icon';
  @Input() searchLabel = 'Search';
  @Input() canToggleSearch = false;
  @Input()  showSearch = false;


  @Output() onSelectIcon = new EventEmitter<string>();
  @Output() onChooseIcon = new EventEmitter<string>();



  constructor(icons: IconsService) {
    super(icons);
    icons.onSelectIcon = this.onSelectIcon;
    icons.onChooseIcon = this.onChooseIcon;
  }


}
