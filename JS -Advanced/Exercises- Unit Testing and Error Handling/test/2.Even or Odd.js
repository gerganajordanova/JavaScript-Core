function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect;
let should = require('chai').should;
let assert = require('chai').assert;

describe("isOddOrEven", function () {
    it('should return undefined with a number parameter', function () {
        expect(isOddOrEven(13)).to.equal(undefined, "Function did not returned the correct result!");
    });

    it('should return undefined with object parameter', function () {
        isOddOrEven({name: 'Maria'}).should.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return "even" with even parameter', function () {
        assert.equal(isOddOrEven('roar'), 'even', 'Function did not return the correct result!');
    });

    it('should return "odd" with odd parameter', function () {
        assert.equal(isOddOrEven('pesho'), 'odd', 'Function did not return the correct result!');
    });

    it('should return correct values with multiple consecutive checks', function () {
        expect(isOddOrEven("cat")).to.equal("odd", "Function did not returned the correct result!");
        expect(isOddOrEven("alabala")).to.equal("odd", "Function did not returned the correct result!");
        expect(isOddOrEven("is it even")).to.equal("even", "Function did not returned the correct result!");
    });

});