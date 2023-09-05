import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';
import { CustomRoutingModule } from './custom-routing.module';
import { SharedModule } from '../@shared/shared.module';
import { UsernameModifierPipe } from './pipes/username-modifier.pipe';

@NgModule({
  declarations: [CustomComponent, UsernameModifierPipe],
  imports: [CommonModule, CustomRoutingModule, SharedModule],
})
export class CustomModule {}
