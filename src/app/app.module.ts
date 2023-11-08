import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';

@NgModule({
  imports: [BrowserModule, FormsModule, BarcodeScannerLivestreamModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
