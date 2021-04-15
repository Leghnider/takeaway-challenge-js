'use strict';

describe('Menu', function(){
    var menu;

    beforeEach( function() {
        menu = new Menu();
    })

    it('returns a menu of dishes that contain prices', function() {
        expect(menu.getList()).toBeTruthy();
    });
});