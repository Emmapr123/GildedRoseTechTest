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
    for( i = 0; i < 3; i++) {
      normalItem.updateQuality()
    }
    const items = normalItem.updateQuality()
    expect(items[0].quality).toEqual(0)
  })
})

describe('Aged Brie', function() {
  it('increases in quality over time', function() {
    const agedBrie = new Shop([ new Item("Aged Brie", 6, 0)])
    const brie = agedBrie.updateQuality()

    expect(brie[0].quality).toEqual(1)
    expect(brie[0].sellIn).toEqual(5)
  })
  it('the quality can never be over 50', function() {
    const agedBrie = new Shop([ new Item('Aged Brie', 6, 50)])
    const brie = agedBrie.updateQuality()

    expect(brie[0].quality).toEqual(50)
  })
})

describe('Sulfuras', function() {
  const sulfurasRagnaros = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 80)])
  
  it('Never loses quality', function() {
    const sulfuras = sulfurasRagnaros.updateQuality()

    expect(sulfuras[0].quality).toEqual(80)
  })
  it('does not pass sellIn date', function() {
    const sulfuras = sulfurasRagnaros.updateQuality()

    expect(sulfuras[0].quality).toEqual(80)
    expect(sulfuras[0].sellIn).toEqual(1)
  })
})

describe('Backstage passes', function() {
  const backstagePass = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)])
  it('increases in quality nearer to its sell by date', function() {
    const backstage = backstagePass.updateQuality()

    expect(backstage[0].quality).toEqual(21)
  })
  it('quality increases by 2 if the consert is less than 10 days away', function() {
    for ( i = 0; i < 4; i++) {
      backstagePass.updateQuality()
    }
    const backstage = backstagePass.updateQuality()

    expect(backstage[0].sellIn).toEqual(9)
    expect(backstage[0].quality).toEqual(27)
  })
  it('quality increases by 3 when the concert is less than 5 days away', function() {
    for ( i = 0; i < 4; i++) {
      backstagePass.updateQuality()
    }
    const backstage = backstagePass.updateQuality()

    expect(backstage[0].sellIn).toEqual(4)
    expect(backstage[0].quality).toEqual(38)
  })
  it('Qualtiy drops to 0 after the concert', function() {
    for ( i = 0; i < 4; i++) {
      backstagePass.updateQuality()
    }
    const backstage = backstagePass.updateQuality()

    expect(backstage[0].sellIn).toEqual(-1)
    expect(backstage[0].quality).toEqual(0)
  })
  it('Quality can never be over 50', function() {
    const backstagePass = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50)])
    const pass = backstagePass.updateQuality()

    expect(pass[0].quality).toEqual(50)
  })
})
