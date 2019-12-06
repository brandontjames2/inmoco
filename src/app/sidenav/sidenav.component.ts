import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';
import { NestedTreeControl } from '@angular/cdk/tree';

export class MenuNode {
  nodename: string;
  children: MenuNode[];
  routerLink: string;
}

const NODE_DATA: MenuNode[] = [
      {
        nodename: 'Clothing Pieces',
        children: [
            {
                nodename: 'Shirts',
                children: [],
                routerLink: '/shop'
            },
            {
                nodename: 'Pants',
                children: [],
                routerLink: '/shop'
            }
        ],
        routerLink: null
      },
      {
        nodename: 'Accessories',
        children: [
            {
                nodename: 'Bags/Satchels',
                children: [],
                routerLink: '/shop'
            },
            {
                nodename: 'Wallets',
                children: [],
                routerLink: '/shop'
            }
        ],
        routerLink: null
      }
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {
    nestedTreeControl: NestedTreeControl<MenuNode> = new NestedTreeControl<MenuNode>(node => node.children);
    nestedDataSource: MatTreeNestedDataSource<MenuNode> = new MatTreeNestedDataSource<MenuNode>();
  
    constructor() {
      this.nestedDataSource.data = NODE_DATA;
    }
  
    ngOnInit() {
      this.nestedTreeControl.collapseAll();
    }
  
    ngOnDestroy() {
      //
    }
  
    onClick() {
      this.nestedTreeControl.collapseAll();
    }
  
    hasNestedChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;
}