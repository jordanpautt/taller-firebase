import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form-song',
    loadChildren: () => import('./pages/create-song/form-song.module').then(m => m.FormSongPageModule)
  },
  {
    path: 'song-detail/:id',
    loadChildren: () => import('./pages/song-detail/song-detail.module').then(m => m.SongDetailPageModule)
  },
  {
    path: 'update-song/:id',
    loadChildren: () => import('./pages/update-song/update-song.module').then(m => m.UpdateSongPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
