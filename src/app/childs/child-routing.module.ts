import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildsPage } from './child.page';

const routes: Routes = [
  {
    path: '',
    component: ChildsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./fragments/tab1/tab1.module').then(m => m.Tab1ChildPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./fragments/tab2/tab2.module').then(m => m.Tab2ChildPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./fragments/tab3/tab3.module').then(m => m.Tab3ChildPageModule)
      },
      {
        path: '',
        redirectTo: '/childs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/childs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ChildPageRoutingModule {}
