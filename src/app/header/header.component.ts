import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShopItem } from '../shop/shop.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    shopItems: ShopItem[] = [];

  ngOnInit() {
    this.shopItems = [
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg"
        },
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg"
        },
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg"
        },
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg"
        },
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg"
        },
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg"
        },
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg"
        },
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg"
        }
    ]
  }

  ngOnDestroy() {
  }
}