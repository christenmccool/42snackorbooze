const unroll = require("./unroll");

describe("#unroll", function () {

    it("is a function", function () {
        expect(typeof unroll).toEqual("function");
    });

    it("is works with a small square", function () {
        const square = [
            ["a", "b", "c"],
            ["d", "e", "f"],
            ["g", "h", "i"]
          ];
        const unrolled = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
        expect(unroll(square)).toEqual(unrolled);
    });

    it("is works with a medium square", function () {
        const square = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
          ]; 
        const unrolled = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
        expect(unroll(square)).toEqual(unrolled);
    });

    it("is works with a big square", function () {
        const square = [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15, 16],
            [17, 18, 19, 20, 21, 22, 23, 24],
            [25, 26, 27, 28, 29, 30, 31, 32],
            [33, 34, 35, 36, 37, 38, 39, 40],
            [41, 42, 43, 44, 45, 46, 47, 48],
            [49, 50, 51, 52, 53, 54, 55, 56],
            [57, 58, 59, 60, 61, 62, 63, 64],
          ]; 
        const unrolled = [1, 2, 3, 4, 5, 6, 7, 8, 
                            16, 24, 32, 40, 48, 56, 64, 
                            63, 62, 61, 60, 59, 58, 57, 
                            49, 41, 33, 25, 17, 9, 
                            10, 11, 12, 13, 14, 15,
                            23, 31, 39, 47, 55, 
                            54, 53, 52, 51, 50,
                            42, 34, 26, 18,
                            19, 20, 21, 22,
                            30, 38, 46,
                            45, 44, 43,
                            35, 27,
                            28, 29,
                            37, 36];

        expect(unroll(square)).toEqual(unrolled);
    });

});
