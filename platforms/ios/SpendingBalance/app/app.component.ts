import { Component } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import {SpendingItemsService} from './services/spendingItems.service'


class Person {

  constructor(public name: string) { }
}



@Component({
  selector: "my-app",
  templateUrl: "./home/home.component.html"
})
export class AppComponent {
 
  private counter: number;
  people: Person[];
  items: Item[];

  constructor(private fonticon: TNSFontIconService, spendingService: SpendingItemsService) {
    this.people = [
      { name: 'Jupa' }
    ]
    this.items = spendingService.items;
  }

}
