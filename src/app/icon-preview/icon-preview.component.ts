import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit} from '@angular/core';
import {IconsService} from "../icons.service";

@Component({
  selector: 'app-icon-preview',
  templateUrl: './icon-preview.component.html',
  styleUrls: ['./icon-preview.component.scss']
})
export class IconPreviewComponent implements OnInit {

  @Input() icon?: any;
  @Input() showCopyButton = false;

  constructor(public icons: IconsService) {

  }
  ngOnInit(): void {
  }

}
