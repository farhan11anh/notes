import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// custom modules
import { EditorModule } from './modules/editor/editor.module';
import { MainModule } from './modules/main/main.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { TopbarModule } from './modules/topbar/topbar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    MainModule,
    SidebarModule,
    TopbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
