import { Component, InjectionToken, OnInit } from "@angular/core";

export const HEADER_TOKEN = new InjectionToken<WidgetHeaderComponent>(
  "widget-header"
);

@Component({
  selector: "lib-widget-header",
  templateUrl: "./widget-header.component.html",
  styleUrls: ["./widget-header.component.scss"],
  providers: [
    {
      provide: HEADER_TOKEN,
      useExisting: WidgetHeaderComponent,
    },
  ],
})
export class WidgetHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
