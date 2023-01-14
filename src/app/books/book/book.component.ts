import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
@Input() book : Book = {} as Book;
@Output() bookEmitter = new EventEmitter<Book>();

isInCart : boolean = false;

myInterval : any = null;
constructor (private cartService:CartService){}

ngOnInit(): void{
  // this.myInterval = setInterval(() => {
  //   console.log("Hello");
  // }, 1000)
}

// ngOnDestroy(): void{
//   clearInterval(this.myInterval);
//   console.log({ OnDestroy: 'OnDestroy' });
// }

addToCart(){
    this.cartService.add(this.book);
    this.isInCart = true;
    
    //this line is to emit to parent 
    //just to show implementation of @output
    //Not really necessary in this code
    this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.cartService.remove(this.book);
    this.isInCart = true;
  }
}
