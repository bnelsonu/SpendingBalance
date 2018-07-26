"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var home_component_1 = require("./home/home.component");
var action_bar_component_1 = require("./ui/action-bar/action-bar.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
                action_bar_component_1.ActionBarComponent
            ],
            bootstrap: [home_component_1.HomeComponent],
            exports: [action_bar_component_1.ActionBarComponent],
            imports: [nativescript_module_1.NativeScriptModule, nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                    'mdi': 'material-design-icons.css', 'fa': './fonts/font-awesome.min.css'
                })],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUM5RCx3REFBc0Q7QUFDdEQsNkVBQXlFO0FBYXpFO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFYckIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDhCQUFhO2dCQUNiLHlDQUFrQjthQUFDO1lBQ3JCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDMUIsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUMsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUNyRCxLQUFLLEVBQUUsMkJBQTJCLEVBQUMsSUFBSSxFQUFFLDhCQUE4QjtpQkFDeEUsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gXCIuL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnRcIlxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIEFjdGlvbkJhckNvbXBvbmVudF0sXG4gIGJvb3RzdHJhcDogW0hvbWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWN0aW9uQmFyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSxUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAnbWRpJzogJ21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3MnLCdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5taW4uY3NzJ1xuICB9KV0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=