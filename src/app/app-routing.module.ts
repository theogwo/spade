import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./pages/discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'bodybuild',
    loadChildren: () => import('./pages/bodybuild/bodybuild.module').then( m => m.BodybuildPageModule)
  },
  {
    path: 'relationshiptrait',
    loadChildren: () => import('./pages/relationshiptrait/relationshiptrait.module').then( m => m.RelationshiptraitPageModule)
  },
  {
    path: 'ethnicity',
    loadChildren: () => import('./pages/ethnicity/ethnicity.module').then( m => m.EthnicityPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}