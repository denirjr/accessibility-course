import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager/keyboard-manager.module';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule, KeyboardManagerModule],
  exports: [YesNoButtonGroupComponent],
})
export class YesNoButtonGroupModule {}
