import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import { navComponentInput } from './Events'

@Component({
  selector: 'navigation-ctrl',
  templateUrl: './navigation-ctrl.component.html',
  styleUrls: ['./navigation-ctrl.component.css']
})
export class navigationctrlComponent implements OnInit {
  // Icon ClassName
  leftIcon: string
  rightIcon: string
  leftIconUrl: string
  rightIconUrl: string
  alignment: string

  @Input() navConfig: navComponentInput;
  constructor() {
   }

  ngOnInit() {
  }

  ngOnChanges(){

  }

}
