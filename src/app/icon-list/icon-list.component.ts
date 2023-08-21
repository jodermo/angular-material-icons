import {Component, Input, OnInit} from '@angular/core';
import {IconsService} from "../icons.service";

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {



  constructor(public icons: IconsService) {

  }

  ngOnInit(): void {
    this.icons.changeSearchQuery();
  }

}
