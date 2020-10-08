import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualHomeComponent } from './manual-home/manual-home.component';
import { CICDHomeComponent } from './cicdhome/cicdhome.component';


const routes: Routes = [
  { path: 'manual-home', component: ManualHomeComponent },
  { path: 'cicd-home', component: CICDHomeComponent },
  { path: '**', component: ManualHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
