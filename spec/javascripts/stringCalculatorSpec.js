describe("The string calculator", function(){
    it("accepts a string and outputs a number", function() {
        expect(typeof calculate("")).toBe("number");
    });

    it("calculate '1+1' and returns 2", function() {
    	expect(calculate("1+1")).toBe(2);
    });

    it("calculates '1-1' and returns 0", function() {
      expect(calculate('1-1')).toBe(0);
    });

    it("calculates '3*3' and returns 9", function() {
      expect(calculate('3*3')).toBe(9);
    });

    it("calculates '6/3' and returns 2", function() {
      expect(calculate('6/3')).toBe(2);
    });

    it("calculates '60/3' and returns 20", function() {
      expect(calculate('60/3')).toBe(20);
    });
});