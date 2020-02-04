import { Component, OnDestroy, OnInit } from "@angular/core";
import { ShopItem } from "../shared/shop-item.model";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"]
})
export class ShopComponent implements OnInit, OnDestroy {
  shopItems: ShopItem[] = [];

  ngOnInit() {
    this.shopItems = [
      {
        title: "shoe",
        price: 99,
        imagePath: "../../assets/img/logo2.jpeg",
        quantity: 3
      },
      {
        title: "shoe",
        price: 99,
        imagePath: "../../assets/img/logo2.jpeg",
        quantity: 3
      },
      {
        title: "shoe",
        price: 99,
        imagePath: "../../assets/img/logo2.jpeg",
        quantity: 3
      },
      {
        title: "shoe",
        price: 99,
        imagePath: "../../assets/img/logo2.jpeg",
        quantity: 3
      },
      {
        title: "shoe",
        price: 99,
        imagePath: "../../assets/img/logo2.jpeg",
        quantity: 3
      },
      {
        title: "shoe",
        price: 99,
        imagePath: "../../assets/img/logo2.jpeg",
        quantity: 3
      },
      {
        title: "shoe",
        price: 99,
        imagePath: "../../assets/img/logo2.jpeg",
        quantity: 3
      },
      {
        title: "shoe",
        price: 99,
        imagePath: "../../assets/img/logo2.jpeg",
        quantity: 3
      }
    ];
  }

  ngOnDestroy() {}
}
