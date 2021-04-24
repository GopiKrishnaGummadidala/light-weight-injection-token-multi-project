import { Component, OnInit } from "@angular/core";

export abstract class HeaderToken {
  abstract refresh();
}

@Component({
  selector: "lib-widget-header",
  templateUrl: "./widget-header.component.html",
  styleUrls: ["./widget-header.component.scss"],
  providers: [{ provide: HeaderToken, useExisting: WidgetHeaderComponent }],
})
export class WidgetHeaderComponent implements HeaderToken, OnInit {
  constructor() {}

  refresh() {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {}
}
