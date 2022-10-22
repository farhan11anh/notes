import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { EditorComponent } from './editor.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ContentComponent,
    EditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
