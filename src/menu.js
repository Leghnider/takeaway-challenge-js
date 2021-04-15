'use strict';

class Menu {
    constructor() {
        this.list = [
            { dish: 'Pizza', price: 5.99 },
            { dish: 'Pasta', price: 8.00 },
            { dish: 'Bruschetta', price: 3.00 },
            { dish: 'Burrata', price: 4.50 },
            { dish: 'Lasagne', price: 10.00 },
            { dish: 'Gelato', price: 2.50 },
            { dish: 'Tiramisu', price: 4.99 },
        ]
    }

    getList() {
        return this.list;
    }
}