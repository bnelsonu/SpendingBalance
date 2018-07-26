import { Component } from "@angular/core";
//import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { Page } from "ui/page";


@Component({
    selector: "sbnce",
    templateUrl: "./home/home.component.html"
})
export class HomeComponent {

    constructor(private  page:Page){
        page.actionBarHidden = true;
    }
}
