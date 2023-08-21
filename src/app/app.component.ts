import { Component } from '@angular/core';
import {IconsService} from "./icons.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public icons: IconsService) {

  }

}
