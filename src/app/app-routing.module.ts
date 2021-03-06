import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneDataComponent } from './components/phone-data/phone-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PhoneDirectoryHomeComponent } from './components/phone-directory-home/phone-directory-home.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';

const routes: Routes = [
  {path: 'home', component: PhoneDirectoryHomeComponent},
  {path: 'phone-list-for/:number', component: PhoneDataComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
