import { Subject } from 'rxjs';
import { ShopItem } from './shared/shop-item.model';

export class CartService {
    shopItemsChanged = new Subject<ShopItem[]>();
    private shopItems: ShopItem[] = [
        {
            title: "shoe",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg",
            quantity: 3
        },
        {
            title: "shirt",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg",
            quantity: 3
        },
        {
            title: "jacket",
            price: 99,
            imagePath: "../../assets/img/logo2.jpeg",
            quantity: 3
        }
    ];

    addShopItem(shopItem: ShopItem) {
        this.shopItems.push(shopItem);
        this.update();
    }

    removeShopItem(shopItem: ShopItem) {
        this.shopItems.splice(this.shopItems.findIndex((item) => item.title == shopItem.title), 1);
        this.update();
    }

    getShopItems() {
        return this.shopItems.slice();
    }

    updateQuantity(shopItem: ShopItem, quantity: number) {
        this.shopItems.find((item: ShopItem) => item.title == shopItem.title).quantity = quantity;
        this.update();
    }

    update() {
        this.shopItemsChanged.next(this.shopItems.slice());
    }
}