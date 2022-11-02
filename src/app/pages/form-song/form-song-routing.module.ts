import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSongPage } from './form-song.page';

const routes: Routes = [
  {
    path: '',
    component: FormSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormSongPageRoutingModule {}
