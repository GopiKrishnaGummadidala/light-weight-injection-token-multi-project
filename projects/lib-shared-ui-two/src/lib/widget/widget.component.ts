import { Component, ContentChild, OnInit } from "@angular/core";
import { WidgetHeaderComponent } from "projects/lib-shared-ui-one/src/public-api";
import { HEADER_TOKEN } from "../widget-header/widget-header.component";

@Component({
  selector: "lib-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
})
export class WidgetComponent implements OnInit {
  @ContentChild(HEADER_TOKEN, null)
  headerComponent: WidgetHeaderComponent | null = null;
  constructor() {}

  ngOnInit() {}
}
