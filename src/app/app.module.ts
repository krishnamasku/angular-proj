import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { PhoneDataComponent } from './components/phone-data/phone-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PhoneDirectoryService } from './services/phone-directory.service';
import { PhonenumberPipe } from './pipes/phonenumber.pipe';
import { SrtictlynumbersonlyDirective } from './directives/srtictlynumbersonly.directive';
import { PhoneDirectoryHomeComponent } from './components/phone-directory-home/phone-directory-home.component';
import { NavigationService } from './services/navigation.service';
import { ServerErrorComponent } from './components/server-error/server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneDataComponent,
    PhonenumberPipe,
    SrtictlynumbersonlyDirective,
    PageNotFoundComponent,
    PhoneDirectoryHomeComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    PhoneDirectoryService, 
    NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
