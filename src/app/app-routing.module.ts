import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { LandingComponent } from "./landing/landing.component";
import { MissionComponent } from "./mission/mission.component";
import { ShopComponent } from "./shop/shop.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "shop", component: ShopComponent },
  { path: "mission", component: MissionComponent },
  { path: "cart", component: CartComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
