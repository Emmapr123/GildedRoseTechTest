describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");

  });

});

describe('A normal item with two days to sell and a quality of 10', function() {
  const normalItem = new Shop([ new Item("Bagel", 2, 10)]);

  it('should go down by 1 quality point when 1 day has passed', function() {
    const items = normalItem.updateQuality();
    expect(items[0].quality).toEqual(9)
    expect(items[0].sellIn).toEqual(1)
  })
  it('once the sell by date has passed, quality degrades twice as fast', function() {
    normalItem.updateQuality()
    const items = normalItem.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(6)
  })
  it('Quality of an item can never be negative', function() {
    for( i = 0; i < 2; i++) {
      normalItem.updateQuality()
    }
    const items = normalItem.updateQuality()
    expect(items[0].quality).toEqual(0)
  })
})

describe('Aged Brie', function() {
  const agedBrie = new Shop([ new Item("Aged Brie", 2, 0)])
  it('increases in quality over time', function() {
    const brie = agedBrie.updateQuality()

    expect(brie[0].quality).toEqual(1)
  })
})