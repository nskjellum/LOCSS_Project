import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: 'view-data' , loadChildren: './view-data/view-data.module#ViewDataPageModule'},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'gauge-list-map', loadChildren: './gauge-list-map/gauge-list-map.module#GaugeListMapPageModule' },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
