import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { ShopItem } from '../shared/shop-item.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    this.shopItemSub.unsubscribe();
  }
}
