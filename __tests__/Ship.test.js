/* globals describe it expect */
const ship = require('../src/Ship.js');
describe('ship', () => {
    it('can be instantiated', () => {
        expect(new ship()).toBeinstanceOff(Object);
    });   
});