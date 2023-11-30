import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { LiveAuctionComponent } from './live-auction/live-auction.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path:'create-auction', component: CreateAuctionComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo :'home', pathMatch:'full'},
  {path:'sign-in', component: SignInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'profile', component:ProfileComponent},
  {path:'live-auction', component:LiveAuctionComponent},
  {path:'favorites', component:FavoritesComponent},
  {path:"wallet",component:WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
