import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestJsComponent } from './testJs/test-js.component';
import { TestUiComponent } from './testUi/test-ui.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-js', component: TestJsComponent },
  { path: 'test-ui', component: TestUiComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
