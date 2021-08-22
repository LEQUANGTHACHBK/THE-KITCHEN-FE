import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRoutingModule } from './modules/account/account-routing.module';
import { StoreComponent } from './modules/store/store.component';


const routes: Routes = [
  {
    path      :  '',
    component : StoreComponent
  },
  {
    path          : 'account',
    loadChildren  : () => import('./modules/account/account.module').then(m => m.AccountModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AccountRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
