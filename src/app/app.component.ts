import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  @ViewChild('scanner', { static: false })
  scanner: BarcodeScannerLivestreamComponent;
  barcode: string;

  result;
  ngAfterViewInit() {
    this.scanner.start();
  }

  startScanner(): void {
    this.scanner.start();
    this.barcode = null;
    this.result = null;
  }

  onValueChanges(result: any) {
    this.barcode = result.codeResult.code;
    this.result = result;
    this.scanner.stop();
  }
}
