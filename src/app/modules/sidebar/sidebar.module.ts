import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SidebarComponent } from './sidebar.component';



@NgModule({
  declarations: [
    NavContainerComponent,
    NavItemComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
