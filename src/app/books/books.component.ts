import { Component } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
  constructor (private booksService: BooksService){
    // console.log({ constructort: 'constructort' });
  }

  books: Book[] = [];

  

  ngOnInit(): void{
    // console.log({ OnInit: 'OnInit' });
    this.books = this.booksService.getBooks();
  }

  //addToCart function is not usefull here just to demonstrate @output child to parent communication
  addToCart(event:Book){
    console.log(event);
  }

  // isDisabled:boolean = false;

  // handleClick(){
  //   this.isDisabled = true;
  // }
  // name:string = "Chris";
  // MyName:string = "";

  // // handleInput(event : any){
  // //   this.MyName = event.target.value;

  // // }

  isShowing :boolean = true;

  toggleBooks(){
    //if isShowing is true make it false
    //or if isShowing is false make it true

    this.isShowing = !this.isShowing;
  }
}
