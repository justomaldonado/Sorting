describe("Bubble Sort", function () {
  let arr = [6, 5, 8];
  let arr2 = [15, 1, 30, 100, 123];
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Ordena los array", function () {
    expect(bubbleSort(arr)).toEqual([5, 6, 8]);
  });
  it("Ordena los array mas complejos", function () {
    expect(bubbleSort(arr2)).toEqual([1, 15, 30, 100, 123]);
  });
});

describe("probando spies", function () {
  it("Aplicando spy", function () {
    spyOn(window, "swap").and.callThrough();
    // callThrough le dice al spy que utilice el método original chocolate['masticar'],
    // mientras que `callFake` haría una copia.
    bubbleSort([2, 1, 3]);
    expect(window.swap.calls.count()).toEqual(1);
  });
});
