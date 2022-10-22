import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AvatarComponent } from './nav/avatar/avatar.component';
import { HeadTitleComponent } from './nav/head-title/head-title.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './sidebar/list/list.component';
import { NewListComponent } from './sidebar/new-list/new-list.component';
import { ContentComponent } from './content/content.component';
import { ListContentComponent } from './content/list-content/list-content.component';
import { SearchBarComponent } from './content/list-content/search-bar/search-bar.component';
import { ListChildComponent } from './content/list-content/list-child/list-child.component';
import { AddListComponent } from './content/list-content/add-list/add-list.component';
import { ViewContentComponent } from './content/view-content/view-content.component';
import { HeadViewContentComponent } from './content/view-content/head-view-content/head-view-content.component';
import { BodyViewContentComponent } from './content/view-content/body-view-content/body-view-content.component';



@NgModule({
  declarations: [
    NavComponent,
    AvatarComponent,
    HeadTitleComponent,
    SidebarComponent,
    ListComponent,
    NewListComponent,
    ContentComponent,
    ListContentComponent,
    SearchBarComponent,
    ListChildComponent,
    AddListComponent,
    ViewContentComponent,
    HeadViewContentComponent,
    BodyViewContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    AvatarComponent,
    HeadTitleComponent,
    SidebarComponent,
    ListComponent,
    NewListComponent,
    ContentComponent,
    ListContentComponent,
    SearchBarComponent,
    ListChildComponent,
    AddListComponent,
    ViewContentComponent,
    HeadViewContentComponent,
    BodyViewContentComponent
  ]
})
export class MainModule { }
