import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/custom', pathMatch: 'full' },
    { path: 'custom', component: CustomComponent, data: { title: marker('Custom') } },
  ]),
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class CustomRoutingModule {}
