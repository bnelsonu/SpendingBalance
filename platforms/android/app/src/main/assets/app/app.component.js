"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var spendingItems_service_1 = require("./services/spendingItems.service");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(fonticon, spendingService) {
        this.fonticon = fonticon;
        this.people = [
            { name: 'Jupa' }
        ];
        this.items = spendingService.items;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./home/home.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_ng2_fonticon_1.TNSFontIconService, spendingItems_service_1.SpendingItemsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdUVBQStEO0FBQy9ELDBFQUFxRTtBQUdyRTtJQUVFLGdCQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDdEMsYUFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBUUQ7SUFNRSxzQkFBb0IsUUFBNEIsRUFBRSxlQUFxQztRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1NBQ2pCLENBQUE7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQVhVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSw0QkFBNEI7U0FDMUMsQ0FBQzt5Q0FPOEIsOENBQWtCLEVBQW1CLDRDQUFvQjtPQU41RSxZQUFZLENBYXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcbmltcG9ydCB7U3BlbmRpbmdJdGVtc1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvc3BlbmRpbmdJdGVtcy5zZXJ2aWNlJ1xuXG5cbmNsYXNzIFBlcnNvbiB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XG59XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiBcbiAgcHJpdmF0ZSBjb3VudGVyOiBudW1iZXI7XG4gIHBlb3BsZTogUGVyc29uW107XG4gIGl0ZW1zOiBJdGVtW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLCBzcGVuZGluZ1NlcnZpY2U6IFNwZW5kaW5nSXRlbXNTZXJ2aWNlKSB7XG4gICAgdGhpcy5wZW9wbGUgPSBbXG4gICAgICB7IG5hbWU6ICdKdXBhJyB9XG4gICAgXVxuICAgIHRoaXMuaXRlbXMgPSBzcGVuZGluZ1NlcnZpY2UuaXRlbXM7XG4gIH1cblxufVxuIl19