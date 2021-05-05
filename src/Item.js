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
    this.minQuality = 0
    this.maxQuality = 50
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
    if (this.items[0].quality < this.maxQuality) {
      if (this.items[0].sellIn > 10) { this.items[0].quality = this.items[0].quality + 1; 
      } else if (this.items[0].sellIn < 6) { this.items[0].quality = this.items[0].quality + 3; 
      } else { this.items[0].quality = this.items[0].quality + 2; }
    }
    this.items[0].sellIn -= 1;
    if (this.items[0].sellIn < 0) {
      this.items[0].quality = this.items[0].quality - this.items[0].quality;
    }
  }
  updateQualityRegularItem() {
    if (this.items[0].quality > this.minQuality) { this.items[0].quality = this.items[0].quality - 1 }
    this.items[0].sellIn = this.items[0].sellIn - 1;
    if (this.items[0].sellIn < 0 && this.items[0].quality > this.minQuality) {
          this.items[0].quality = this.items[0].quality - 1;
    }
  }
}

