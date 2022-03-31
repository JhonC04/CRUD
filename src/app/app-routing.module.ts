import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployedFormComponent } from './components/shared/employed-form/employed-form.component';

const routes: Routes = [
  {path: 'details', loadChildren: () => import('./pages/details/details.module').then(m=>m.DetailsModule)},
  {path: 'new', loadChildren: () => import('./pages/new/new.module').then(m=>m.NewModule)},
  {path: 'list', loadChildren: () => import('./pages/list/list.module').then(m=>m.ListModule)},
  {path: 'edit', loadChildren: () => import('./pages/edit/edit.module').then(m=>m.EditModule)},
  {path: 'form', component: EmployedFormComponent},
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
