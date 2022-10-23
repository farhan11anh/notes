import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() open: boolean;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    const elem = this.element.nativeElement;
    elem.classList[this.open ? 'add' : 'remove']('open');
  }

}
