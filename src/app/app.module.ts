import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**charts */
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
