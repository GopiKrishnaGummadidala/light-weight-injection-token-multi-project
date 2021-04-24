import { Component, ContentChild, OnInit } from "@angular/core";
import { HeaderToken } from "../widget-header/widget-header.component";

@Component({
  selector: "lib-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
})
export class WidgetComponent implements OnInit {
  @ContentChild(HeaderToken, { static: true })
  headerComponent: HeaderToken | null = null;
  constructor() {}

  ngOnInit() {}
}
