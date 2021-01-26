import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'add-measurement',
        children: [
          {
            path: '',
            loadChildren: '../add-measurement/add-measurement.module#AddMeasurementPageModule'
          },
          {
            path: ':gaugeId',
            loadChildren: '../add-measurement/add-measurement.module#AddMeasurementPageModule'
          },
          
        ]
      },
      {
      path: 'view-data',
       children: [
          {
           path: '',
            loadChildren: '../view-data/view-data.module#ViewDataPageModule'
          }
       ]
     },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../tab4/tab4.module#Tab4PageModule'
          }
        ]
      },
      {
        path: 'view-gauge/:id/:name',
        children: [
          {
            path: '',
            loadChildren: '../view-gauge/view-gauge.module#ViewGaugePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/add-measurement',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab4',
    pathMatch: 'full'
  }
 /* {
    path: '',
    redirectTo: '/tabs/add-measurement',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
