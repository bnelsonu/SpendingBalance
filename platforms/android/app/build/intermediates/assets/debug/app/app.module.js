"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var app_component_1 = require("./app.component");
var spendingItems_service_1 = require("./services/spendingItems.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [spendingItems_service_1.SpendingItemsService],
            imports: [nativescript_module_1.NativeScriptModule, nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                    'mdi': 'material-design-icons.css'
                })],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUM5RCxpREFBK0M7QUFDL0MsMEVBQXdFO0FBV3hFO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFUckIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLDRDQUFvQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFDLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDckQsS0FBSyxFQUFFLDJCQUEyQjtpQkFDbkMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3BlbmRpbmdJdGVtc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zcGVuZGluZ0l0ZW1zLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbU3BlbmRpbmdJdGVtc1NlcnZpY2VdLFxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICdtZGknOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcydcbiAgfSldLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19