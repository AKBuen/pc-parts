import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'smoke',
    loadChildren: () => import('./pages/smoke/smoke.module').then( m => m.SmokePageModule)
  },
  {
    path: 'our',
    loadChildren: () => import('./pages/our/our.module').then( m => m.OurPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./pages/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'the',
    loadChildren: () => import('./pages/the/the.module').then( m => m.ThePageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./pages/developers/developers.module').then( m => m.DevelopersPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
