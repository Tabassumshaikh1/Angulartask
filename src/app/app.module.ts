import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LifeComponent } from './component/life/life.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import {HttpClientModule} from '@angular/common/http';
import { MydataComponent } from './component/mydata/mydata.component';
import { NavComponent } from './component/nav/nav.component';
import { AddprodComponent } from './component/addprod/addprod.component';
import { UpdateprodComponent } from './component/updateprod/updateprod.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ParentComponent,
    ChildComponent,
    MydataComponent,
    NavComponent,
    AddprodComponent,
    UpdateprodComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
