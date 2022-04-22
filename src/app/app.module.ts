import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TestUiComponent } from './testUi/test-ui.component';
import { TestJsComponent } from './testJs/test-js.component';
import { TestJsService } from './testJs/service/test-js.service';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestUiComponent,
    TestJsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [TestJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
