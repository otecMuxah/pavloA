import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'StarWars fans resource',
    loadChildren: () =>
      import('./overview/overview.module').then((m) => m.OverviewModule),
  },
  {
    path: 'sign-in',
    title: 'Sign-in',
    loadChildren: () =>
      import('./auth/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'sign-up',
    title: 'Sign-up',
    loadChildren: () =>
      import('./auth/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'page-not-found',
    title: 'Page not found',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
