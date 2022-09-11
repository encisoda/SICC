import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    children: [
        {
            path: '',
            loadChildren: () =>
                import('./modules/inicio/inicio.module').then(
                    (m) => m.InicioModule
                )
        }],
  },
  {
    path: 'login',
    children: [
        {
            path: '',
            loadChildren: () =>
                import('./modules/login/login.module').then(
                    (m) => m.LoginModule
                )
        }],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
