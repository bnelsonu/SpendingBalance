import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { HomeComponent } from "./home/home.component";
import { ActionBarComponent } from "./ui/action-bar/action-bar.component"

@NgModule({
  declarations: [
    HomeComponent,
    ActionBarComponent],
  bootstrap: [HomeComponent],
  exports: [ActionBarComponent],
  imports: [NativeScriptModule,TNSFontIconModule.forRoot({
    'mdi': 'material-design-icons.css','fa': './fonts/font-awesome.min.css'
  })],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
