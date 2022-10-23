import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import feather from 'feather-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {
  @Input() name!: string;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (!this.name) return;

    const elem = this.element.nativeElement;
    const icon = feather.icons[this.name].toSvg();

    elem.insertAdjacentHTML('beforebegin', icon);
    elem.remove();
  }

}
