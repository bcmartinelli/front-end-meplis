import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TesteJsComponent } from './testeJs/teste-js.component';
import { TesteUiComponent } from './testeUi/teste-ui.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teste-js', component: TesteJsComponent },
  { path: 'teste-ui', component: TesteUiComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
