import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule, MaterialModule, MatToolbarModule],
  declarations: [AppComponent, HelloComponent, MyCoolComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
