import { Component, OnInit } from "@angular/core";
import { ShopItem } from "../shared/shop-item.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  shopItems: ShopItem[] = [
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

  constructor() {}

  ngOnInit() {}
}
