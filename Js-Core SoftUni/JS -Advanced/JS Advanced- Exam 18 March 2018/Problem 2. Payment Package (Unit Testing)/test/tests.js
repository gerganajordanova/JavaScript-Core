let expect = require('chai').expect;
let PaymentPackage = require('../PaymentPackage');

describe('PaymentPackage Tests', function () {
    it("Should be initialized correctly", function () {
        const payment = new PaymentPackage('Pesho', 60.5);
        expect(payment.name).to.be.equal('Pesho');
        expect(payment.value).to.be.equal(60.5);

    });
    it("Should be initialized correctly", function () {
        const payment = new PaymentPackage('Pesho', 60.5);
        expect(payment.hasOwnProperty("_name")).to.be.equal(true);
        expect(payment.hasOwnProperty("_value")).to.be.equal(true);
        expect(payment.hasOwnProperty("_VAT")).to.be.equal(true);
        expect(payment.hasOwnProperty("_active")).to.be.equal(true);

    });
});
describe("toString", function () {
    it("should return correct value for ('asdasd', 500)", function () {
        let p = new PaymentPackage("asdasd", 500);
        let expectedText = [
            `Package: ${p.name}` + '',
            `- Value (excl. VAT): ${p.value}`,
            `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
        ].join("\n");
        let actualText = p.toString();

        expect(actualText).to.be.equal(expectedText);
    });
    it("should return correct value for ('heyheyhey', 0.5)", function () {
        let p = new PaymentPackage("heyheyhey", 0.5);
        let expectedText = [
            `Package: ${p.name}` + '',
            `- Value (excl. VAT): ${p.value}`,
            `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
        ].join("\n");
        let actualText = p.toString();

        expect(actualText).to.be.equal(expectedText);
    });

    it("should return correct value for ('h', 5000) inactive", function () {
        let p = new PaymentPackage("h", 5000);
        p.active = false;
        p.active = true;
        p.active = false;
        let expectedText = [
            `Package: ${p.name}` + ' (inactive)',
            `- Value (excl. VAT): ${p.value}`,
            `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
        ].join("\n");
        let actualText = p.toString();

        expect(actualText).to.be.equal(expectedText);
    });
    it("should return correct value for ('123123123', 123) inactive", function () {
        let p = new PaymentPackage("123123123", 123);
        p.active = false;
        p.active = true;
        p.active = false;
        let expectedText = [
            `Package: ${p.name}` + ' (inactive)',
            `- Value (excl. VAT): ${p.value}`,
            `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
        ].join("\n");
        let actualText = p.toString();

        expect(actualText).to.be.equal(expectedText);
    });
    it("should return correct value for ('123123123', 0.9) inactive", function () {
        let p = new PaymentPackage("123123123", 0.9);
        p.active = false;
        p.active = true;
        p.active = false;
        let expectedText = [
            `Package: ${p.name}` + ' (inactive)',
            `- Value (excl. VAT): ${p.value}`,
            `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
        ].join("\n");
        let actualText = p.toString();

        expect(actualText).to.be.equal(expectedText);
    });
    it("should return correct value for ('0', 0) inactive", function () {
        let p = new PaymentPackage("0", 0);
        p.active = false;
        p.active = true;
        p.active = false;
        let expectedText = [
            `Package: ${p.name}` + ' (inactive)',
            `- Value (excl. VAT): ${p.value}`,
            `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
        ].join("\n");
        let actualText = p.toString();

        expect(actualText).to.be.equal(expectedText);
    });
});