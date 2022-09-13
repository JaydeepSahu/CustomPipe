import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { USDtoINRPipe } from './Pipes/usdto-inr.pipe';
import { GreetPipe } from './Pipes/greet.pipe';
import { FeetToMeterPipe } from './Pipes/feet-to-meter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    USDtoINRPipe,
    GreetPipe,
    FeetToMeterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
