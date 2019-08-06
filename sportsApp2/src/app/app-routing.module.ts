import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./test/test.module').then(mod => mod.TestModule)
  },
  {
    path:'Details/:id',
    loadChildren:()=>import('./athlete/athlete.module').then(mod=>mod.AthleteModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
