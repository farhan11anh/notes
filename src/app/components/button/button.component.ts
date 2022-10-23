import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import feather from 'feather-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() icon?: string;
  @Input() fill?: string;
  @Input() color?: string;
  @Input() background?: string;

  @Output() _click: EventEmitter<any> = new EventEmitter();

  @ViewChild('button') button: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.fill);

    // set icon
    if (this.icon) {
      const btn = this.button.nativeElement;
      const icon = feather.icons[this.icon].toSvg();

      btn.insertAdjacentHTML('afterbegin', icon);
    }
  }

  onClick() {
    this._click.emit();
  }

}
