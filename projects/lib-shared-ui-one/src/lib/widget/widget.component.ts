import { Component, ContentChild, OnInit } from "@angular/core";
import { WidgetHeaderComponent } from "../widget-header/widget-header.component";

@Component({
  selector: "lib-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
})
export class WidgetComponent implements OnInit {
  @ContentChild(WidgetHeaderComponent, { static: true })
  headerComponent: WidgetHeaderComponent | null = null;
  constructor() {}

  ngOnInit() {}
}
