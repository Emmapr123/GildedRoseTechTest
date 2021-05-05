class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Aged Brie') { this.updateQualityAgedBrie() 
      } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { this.updateQualityBackstagePass() 
      } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') { return this.items
      } else { this.updateQualityRegularItem() }
  }
   
  return this.items;
  }
  updateQualityAgedBrie() {
    const MaxQuality = 50

    if (this.items[0].quality < MaxQuality) {
      this.items[0].quality = this.items[0].quality += 1;
    }

    this.items[0].sellIn -= 1;
  }
  updateQualityBackstagePass() {
    const MaxQuality = 50
    console.log(this.items[0].quality)
    if (this.items[0].quality < MaxQuality) {
      this.items[0].quality = this.items[0].quality + 1;
      if (this.items[0].sellIn < 11) {
        if (this.items[0].quality < MaxQuality) {
          this.items[0].quality = this.items[0].quality + 1;
        }
      }
      if (this.items[0].sellIn < 6) {
        if (this.items[0].quality < MaxQuality) {
          this.items[0].quality = this.items[0].quality + 1;
        }
      }
    }
    this.items[0].sellIn -= 1;
    if (this.items[0].sellIn < 0) {
      this.items[0].quality = this.items[0].quality - this.items[0].quality;
    }
  }
  updateQualityRegularItem() {
    const MinQuality = 0

    if (this.items[0].quality > MinQuality) {
      this.items[0].quality = this.items[0].quality - 1;
    }
    this.items[0].sellIn = this.items[0].sellIn - 1;
    if (this.items[0].sellIn < 0) {
      if (this.items[0].quality > MinQuality) {
          this.items[0].quality = this.items[0].quality - 1;
      }
    }
  }
}

