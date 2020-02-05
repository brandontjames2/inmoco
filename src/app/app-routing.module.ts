import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from './checkout/checkout.component';
import { LandingComponent } from "./landing/landing.component";
import { MissionComponent } from "./mission/mission.component";
import { ShopItemComponent } from "./shop-item/shop-item.component";
import { ShopComponent } from "./shop/shop.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "shop", component: ShopComponent },
  { path: "shop-item", component: ShopItemComponent },
  { path: "mission", component: MissionComponent },
  { path: "cart", component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
