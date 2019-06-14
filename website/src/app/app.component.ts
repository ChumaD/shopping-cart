import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empty=true
  shoppings=[]
  total: any = 0


  website=[
    {pic:'accessories.jpg',description:'Accessories; necklace, earrings and bracelet',price:180},
    {pic:'bag.jpg',description:'Hand bag',price:350},
    {pic:'cell.jpg',description:'Hisense infinity H12',price:8000},
    {pic:'gadget.jpg',description:'cool smart phone gadget',price:50},
    {pic:'hair.jpg',description:'Hair clip and styler',price:100},
    {pic:'headset.jpg',description:'Wireless Headset',price:200},
    {pic:'laptop.png',description:'HP laptop 15t touch with intel i7 with 8GB RAM', price:4999}
  ]

  newprice
  quantity

  addtocart(shopping){

this.shoppings.push(shopping)
this.totalAmout(shopping.price)
this.empty=false
   
  }
  totalAmout(newprice){
this.total= this.total + newprice
  }
  subtotal(newprice){
this.total =this.total - newprice
  }

  Removeitem(shop) {
    let index = this.shoppings.indexOf(shop)
    this.shoppings.splice(index,1)

    this.subtotal(shop.price)

    if(this.shoppings.length <=0){
      this.empty=true
      
}
}
}
