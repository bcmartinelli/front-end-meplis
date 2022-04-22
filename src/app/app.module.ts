import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TesteUiComponent } from './testeUi/teste-ui.component';
import { TesteJsComponent } from './testeJs/teste-js.component';
import { TesteJsService } from './testeJs/service/teste-js.service';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TesteUiComponent,
    TesteJsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [TesteJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
