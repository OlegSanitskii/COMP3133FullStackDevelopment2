const { expect } = require("chai");
const calculator = require("../app/calculator");

describe("Calculator tests (Mocha + Chai)", () => {

  describe("add()", () => {
    it("PASS: should add two numbers correctly", () => {
      expect(calculator.add(2, 3)).to.equal(5);
    });

    it("FAIL: should fail intentionally", () => {
      expect(calculator.add(2, 3)).to.equal(999);
    });
  });

  describe("sub()", () => {
    it("PASS: should subtract two numbers correctly", () => {
      expect(calculator.sub(10, 4)).to.equal(6);
    });

    it("FAIL: should fail intentionally", () => {
      expect(calculator.sub(10, 4)).to.equal(999);
    });
  });

  describe("mul()", () => {
    it("PASS: should multiply two numbers correctly", () => {
      expect(calculator.mul(3, 4)).to.equal(12);
    });

    it("FAIL: should fail intentionally", () => {
      expect(calculator.mul(3, 4)).to.equal(999);
    });
  });

  describe("div()", () => {
    it("PASS: should divide two numbers correctly", () => {
      expect(calculator.div(8, 2)).to.equal(4);
    });

    it("FAIL: should fail intentionally", () => {
      expect(calculator.div(8, 2)).to.equal(999);
    });
  });

});
