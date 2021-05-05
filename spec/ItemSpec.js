describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");

  });

});

describe('A normal item with two days to sell and a quality of 10', function() {
  it('should go down by 1 quality point when 1 day has passed', function() {
    const normalItem = new Shop([ new Item("Bagel", 2, 10)]);
    const items = normalItem.updateQuality();
    expect(items[0].quality).toEqual(9)
  })
})