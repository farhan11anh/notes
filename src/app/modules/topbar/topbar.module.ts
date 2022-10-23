import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';

// import external component
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

@NgModule({
  declarations: [
    TopbarComponent,
    AvatarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
