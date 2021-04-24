import { Component, InjectionToken, OnInit } from "@angular/core";

export const Header_Token = new InjectionToken<WidgetHeaderComponent>(
  "widget-header"
);

@Component({
  selector: "lib-widget-header",
  templateUrl: "./widget-header.component.html",
  styleUrls: ["./widget-header.component.scss"],
  providers: [
    {
      provide: Header_Token,
      useExisting: WidgetHeaderComponent,
    },
  ],
})
export class WidgetHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
