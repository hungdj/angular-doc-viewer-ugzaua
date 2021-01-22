import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doc-viewer",
  templateUrl: "./doc-viewer.component.html",
  styleUrls: ["./doc-viewer.component.scss"]
})
export class DocViewerComponent implements OnInit {
  viewer = "google";
  selectedType = "docx"; //'';
  // doc = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx';
  doc = "https://files.fm/down.php?i=axwasezb&n=SSaD.docx";
  // doc = 'https://files.fm/down.php?i=sdymh2y6';

  // https://github.com/guigrpa/docx-templates#readme

  constructor() {}

  ngOnInit() {}
}
