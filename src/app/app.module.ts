import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageslandingPageComponent } from './pages/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PallanuotoMainComponent } from './pages/pallanuoto/pallanuotomain.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent, PallanuotoMainComponent, PageslandingPageComponent],
})
export class AppModule {}
