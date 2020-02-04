import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatTreeModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { LandingComponent } from "./landing/landing.component";
import { MissionComponent } from "./mission/mission.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SideNavComponent } from "./shared/sidenav/sidenav.component";
import { ShopItemComponent } from "./shop-item/shop-item.component";
import { ShopComponent } from "./shop/shop.component";
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ShopComponent,
    SideNavComponent,
    ShopItemComponent,
    MissionComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
