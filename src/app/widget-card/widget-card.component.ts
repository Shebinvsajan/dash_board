import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css']
})
export class WidgetCardComponent {
@Input() icon:any=""
@Input() des:string=""
@Input() bg:string=""
@Input() total:string=""

}
