import { NgModule } from '@angular/core';
import { LibSharedUiTwoComponent } from './lib-shared-ui-two.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';



@NgModule({
  declarations: [LibSharedUiTwoComponent, WidgetComponent, WidgetHeaderComponent],
  imports: [
  ],
  exports: [LibSharedUiTwoComponent]
})
export class LibSharedUiTwoModule { }
