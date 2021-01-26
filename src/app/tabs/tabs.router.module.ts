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
      path: 'tab2',
       children: [
          {
           path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
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
        path: 'tab3/:id/:name',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
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
