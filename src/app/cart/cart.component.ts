import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { ShopItem } from "../shared/shop-item.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, OnDestroy {
  total = 0;
  shopItems: ShopItem[];
  private shopItemSub: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.shopItems = this.cartService.getShopItems();
    this.shopItemSub = this.cartService.shopItemsChanged.subscribe((shopItems: ShopItem[]) => {
      this.shopItems = shopItems;
      let total = 0;
      for (let shopItem of this.shopItems) {
        total += shopItem.price * shopItem.quantity;
      }
      this.total = total;
    });
    let total = 0;
    for (let shopItem of this.shopItems) {
      total += shopItem.price * shopItem.quantity;
    }
    this.total = total;
  }

  updateTotal(shopItem: ShopItem) {
    if (shopItem.quantity == 0) {
      this.cartService.removeShopItem(shopItem);
    } else {
      this.cartService.updateQuantity(shopItem, shopItem.quantity);
    }
  }

  ngOnDestroy() {
    this.shopItemSub.unsubscribe();
  }
}
