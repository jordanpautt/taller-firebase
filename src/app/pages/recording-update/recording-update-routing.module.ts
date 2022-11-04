import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordingUpdatePage } from './recording-update.page';

const routes: Routes = [
  {
    path: '',
    component: RecordingUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordingUpdatePageRoutingModule {}
