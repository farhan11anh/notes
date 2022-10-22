import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteContainerComponent } from './note-container/note-container.component';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    SearchComponent,
    NoteItemComponent,
    NoteContainerComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
