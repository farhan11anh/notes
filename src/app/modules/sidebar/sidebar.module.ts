import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SidebarComponent } from './sidebar.component';

import { IconComponent } from 'src/app/components/icon/icon.component';

@NgModule({
  declarations: [
    NavContainerComponent,
    NavItemComponent,
    SidebarComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
