import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';

// import external component
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';

@NgModule({
  declarations: [
    TopbarComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
