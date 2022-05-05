import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRegisterComponent } from './components/new-register/new-register.component';
import { ListRegistersComponent } from './components/list-registers/list-registers.component';
import { EditRegisterComponent } from './components/edit-register/edit-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRegisterComponent,
    ListRegistersComponent,
    EditRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
