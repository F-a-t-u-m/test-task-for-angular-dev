import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './auth';

const routes: Routes = [
  // Fallback when no prior route is matched
  // { path: '', component: HomeComponent, data: { title: marker('Home') } },
  {
    path: 'custom',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./custom/custom.module').then((m) => m.CustomModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
