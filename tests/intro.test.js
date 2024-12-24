import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateAverage, factorial } from "../src/intro";

describe("max",() => {
    it("大於參數",() => {
        expect(max(2, 1)).toBe(2);
    })
    it("小於參數",() => {
        expect(max(1, 2)).toBe(2);
    })
    it("參數相等",() => {
        expect(max(1, 1)).toBe(1);
    });
});

describe("fizzBuzz",() => {
    it("3的倍數",() => {
        expect(fizzBuzz(3)).toBe("Fizz");
    })
    it("5的倍數",() => {
        expect(fizzBuzz(5)).toBe("Buzz");
    })
    it("3和5的倍數",() => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
    it("其他數字",() => {
        expect(fizzBuzz(2)).toBe("2");
    });
});

describe("calculateAverage", () => {
    it("無參數", () => {
      expect(calculateAverage()).toBeNaN();
    });
  
    it("空數組", () => {
      expect(calculateAverage([])).toBeNaN();
    });
  
    it("兩個參數", () => {
      expect(calculateAverage([1, 2])).toBe(1.5);
    });
    it("三個參數", () => {
      expect(calculateAverage([1, 2, 3])).toBe(2);
    });
});

describe("factorial", () => {
    it("0的階乘", () => {
      expect(factorial(0)).toBe(1);
    });
  
    it("1的階乘", () => {
      expect(factorial(1)).toBe(1);
    });
  
    it("2的階乘", () => {
      expect(factorial(2)).toBe(2);
    });
  
    it("3的階乘", () => {
      expect(factorial(3)).toBe(6);
    });
  
    it("4的階乘", () => {
      expect(factorial(4)).toBe(24);
    });

    it("負數的階乘", () => {
      expect(factorial(-1)).toBeUndefined();
    });
  });