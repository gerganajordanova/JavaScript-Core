let expect = require('chai').expect;
let Sumator = require('../codeToBeTested');

describe('Sumator Tests', function () {
    let myList;

    beforeEach(function () {
        myList = new Sumator();
    });

    it('tests if it has all props', function () {
        expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
    });
    it('', function () {
        expect(myList.data.length).to.be.equal(0);
        expect(myList.data instanceof Array).to.equal(true);
    });

    it('Test add function', function () {
        myList.add(7);
        expect(myList.data.length).to.be.equal(1);
    });
    it('Test add function', function () {
        myList.add(7);
        expect(myList.data.length).to.be.equal(1);
        myList.add('annie');
        expect(myList.data.length).to.be.equal(2);
        myList.add({name: maria, age: 17});
        expect(myList.data.length).to.be.equal(3);
        myList.add([7, 4, 2]);
        expect(myList.data.length).to.be.equal(4);
    });
    it('tests sum function', function () {
        expect(myList.sumNums()).to.be.equal(0);
        myList.add(5);
        myList.add(10);
        expect(myList.sumNums()).to.be.equal(15);
    });
    it('correctly filters non-numbers when summing', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add([1, 2, 3]);
        expect(myList.sumNums()).to.equal(4, "Didn't filter sum");
    });
    it('tests removeByfilter function', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add(4);
        myList.removeByFilter((e) => e === 4);
        expect(myList.data).to.not.contains(4);
    });
    it('toString returns correct elements', function () {
        myList.add(4);
        myList.add('pesho');
        myList.add('gosho');
        expect(myList.toString()).to.equal('4, pesho, gosho', "toString didn't work correctly");
    });
    it('toString returns (empty) when empty', function () {
        expect(myList.toString()).to.equal('(empty)', "toString didn't remove (empty)");
    });


});