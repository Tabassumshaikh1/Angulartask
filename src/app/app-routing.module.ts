import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprodComponent } from './component/addprod/addprod.component';
import { MydataComponent } from './component/mydata/mydata.component';
import { UpdateprodComponent } from './component/updateprod/updateprod.component';
// AddprodComponent
// MydataComponent
const routes: Routes = [
  {path:'', component:MydataComponent},
  {path:'addprod', component:AddprodComponent},
  {path:'updateprod/:id',component:UpdateprodComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
