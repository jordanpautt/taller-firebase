import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'song',
        loadChildren: () => import('../pages/song/song.module').then(m => m.SongPageModule)
      },
      {
        path: 'singers',
        loadChildren: () => import('../pages/singers/singers.module').then(m => m.SingersPageModule)
      },
      {
        path: 'recording',
        loadChildren: () => import('../pages/recording/recording.module').then(m => m.RecordingPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'song'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
