import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { AppComponent } from "./app.component";
import { SpendingItemsService } from "./services/spendingItems.service";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [SpendingItemsService],
  imports: [NativeScriptModule,TNSFontIconModule.forRoot({
    'mdi': 'material-design-icons.css'
  })],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
