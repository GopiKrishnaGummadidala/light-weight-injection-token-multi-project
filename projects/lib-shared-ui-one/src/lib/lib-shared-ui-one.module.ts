import { NgModule } from "@angular/core";
import { LibSharedUiOneComponent } from "./lib-shared-ui-one.component";
import { WidgetComponent } from "./widget/widget.component";
import { WidgetHeaderComponent } from "./widget-header/widget-header.component";

@NgModule({
  declarations: [
    LibSharedUiOneComponent,
    WidgetComponent,
    WidgetHeaderComponent,
  ],
  imports: [],
  exports: [LibSharedUiOneComponent, WidgetComponent, WidgetHeaderComponent],
})
export class LibSharedUiOneModule {}
