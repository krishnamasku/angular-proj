import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneDataComponent } from './components/phone-data/phone-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PhoneDirectoryHomeComponent } from './components/phone-directory-home/phone-directory-home.component';

const routes: Routes = [
  {path:'home', component:PhoneDirectoryHomeComponent},
  {path:'phone-list-for/:number', component:PhoneDataComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent},
  {path:'bad-request', redirectTo: '/**', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
