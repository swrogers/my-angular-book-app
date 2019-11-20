import { Component,
         OnInit,
         Input,
         HostBinding } from '@angular/core';

import { Product } from '../product.model';

/**
 * @ProductRow: A component for the view of a single Product
 */
@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass='item'; 

  constructor() { }

  ngOnInit() {
  }

}
