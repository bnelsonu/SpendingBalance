import {Injectable } from '@angular/core';


@Injectable()
export class SpendingItemsService{
    items: Item[];

    constructor() {

        this.items = [
            { category: 'purchase', description: 'nail polish', date: '09/04/2018' },
            { category: 'entertainment', description: 'drink', date: '09/04/2018' },
            { category: 'fixed', description: 'rent', date: '09/04/2018' }
        ]
    }
}