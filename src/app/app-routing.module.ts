import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Routes */
import {AppComponent} from './app.component';
import {PageslandingPageComponent} from './pages/landing-page/landing-page.component';
import {PallanuotoMainComponent} from './pages/pallanuoto/pallanuotomain.component';
import {PallanuotoVerbaleCsenComponent} from './pages/pallanuoto/pallanuotoverbaleCsen.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'Pallanuoto',
    component: PallanuotoMainComponent,
  },
  {
    path: 'Pallanuoto/VerbaleCsen',
    component: PallanuotoVerbaleCsenComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }