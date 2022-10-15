import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentChildCommunicationModule } from './module/parent-child-communication/parent-child-communication.module';
import { ContentProjectionModule } from './module/content-projection/content-projection.module';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentChildCommunicationModule,
    ContentProjectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
