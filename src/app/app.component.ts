import {AfterViewInit, Component} from '@angular/core';
import {GcPdfViewer} from "@grapecity/gcpdfviewer";

@Component({
  selector: 'app-root',
  template: '<div id="viewer"></div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'PDFViewer';

  ngAfterViewInit(){
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    viewer.addDefaultPanels();
    viewer.open('/assets/impatient-js-preview-book.pdf')
  }
}
